'use client'

import gsap from 'gsap'
import { useCallback, useEffect, useRef, useState } from 'react'
import { STAR_LAYERS, StarData, HeroContent } from '@/constants/astro-config'
import { Nebula } from '../astro/background/Nebula'
import { OrbitRings } from '../astro/background/OrbitRings'
import { StarField } from '../astro/background/StarField'
import { MainHero } from '../astro/ui/MainHero'
import { ZodiacOrbit } from '../astro/zodiac/ZodiacOrbit'


interface SceneProps {
  content: HeroContent
}

export default function Scene({ content }: SceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const starsRef = useRef<(HTMLDivElement | null)[]>([])
  const parallaxLayersRef = useRef<(HTMLDivElement | null)[]>([])
  const quickToMap = useRef<Map<number, { x: gsap.QuickToFunc; y: gsap.QuickToFunc }>>(new Map())
  const mousePos = useRef({ 
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, 
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 
  })
  const rafId = useRef<number>(0)

  const [starsData] = useState<StarData[]>(() => {
    const stars: StarData[] = []
    STAR_LAYERS.forEach((layer, layerIdx) => {
      for (let i = 0; i < layer.count; i++) {
        stars.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * (layer.maxSize - layer.minSize) + layer.minSize,
          opacity: Math.random() * 0.6 + 0.2,
          layer: layerIdx,
          twinkleDelay: Math.random() * 8,
          twinkleDuration: 4 + Math.random() * 6,
          twinkleType: Math.random() > 0.5 ? 'twinkle' : 'twinkle-alt',
        })
      }
    })
    return stars
  })

  const initQuickTo = useCallback(() => {
    quickToMap.current.clear()
    starsRef.current.forEach((star, i) => {
      if (!star) return
      quickToMap.current.set(i, {
        x: gsap.quickTo(star, 'x', { duration: 0.8, ease: 'power3.out' }),
        y: gsap.quickTo(star, 'y', { duration: 0.8, ease: 'power3.out' }),
      })
    })
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    requestAnimationFrame(() => initQuickTo())

    const parallaxTweens = parallaxLayersRef.current
      .map((layer, i) => {
        if (!layer) return null
        const isMobile = window.innerWidth < 640
        return {
          x: gsap.quickTo(layer, 'x', { duration: 1.2, ease: 'power2.out' }),
          y: gsap.quickTo(layer, 'y', { duration: 1.2, ease: 'power2.out' }),
          factor: ((i + 1) * 8) * (isMobile ? 0.5 : 1),
        }
      })
      .filter(Boolean)

    let ticking = false
    const processMouseMove = () => {
      const { x: clientX, y: clientY } = mousePos.current
      const normalizedX = (clientX - window.innerWidth / 2) / (window.innerWidth / 2)
      const normalizedY = (clientY - window.innerHeight / 2) / (window.innerHeight / 2)

      parallaxTweens.forEach(tween => {
        if (tween) {
          tween.x(-normalizedX * tween.factor)
          tween.y(-normalizedY * tween.factor)
        }
      })

      starsRef.current.forEach((star, i) => {
        if (!star) return
        const data = starsData[i]
        const config = STAR_LAYERS[data.layer]
        const rect = star.getBoundingClientRect()
        const dx = clientX - (rect.left + rect.width / 2)
        const dy = clientY - (rect.top + rect.height / 2)
        const distSq = dx * dx + dy * dy

        let tx = -normalizedX * config.parallaxFactor * 40
        let ty = -normalizedY * config.parallaxFactor * 40

        if (distSq < config.repelRadius * config.repelRadius) {
          const force = Math.pow(1 - Math.sqrt(distSq) / config.repelRadius, 3)
          tx += -(dx / Math.sqrt(distSq)) * config.repelForce * force
          ty += -(dy / Math.sqrt(distSq)) * config.repelForce * force
        }

        const qt = quickToMap.current.get(i)
        if (qt) { qt.x(tx); qt.y(ty) }
      })
      ticking = false
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (!ticking) {
        ticking = true
        rafId.current = requestAnimationFrame(processMouseMove)
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
        if (!ticking) {
          ticking = true
          rafId.current = requestAnimationFrame(processMouseMove)
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    starsRef.current.forEach((star, i) => {
      if (!star) return
      gsap.fromTo(star, 
        { scale: 0, opacity: 0 }, 
        { scale: 1, opacity: starsData[i].opacity, duration: 1.5, delay: Math.random() * 2, ease: 'power2.out' }
      )
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      cancelAnimationFrame(rafId.current)
    }
  }, [starsData, initQuickTo])

  return (
    <main 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden bg-cosmic-bg"
      style={{ background: 'radial-gradient(ellipse at 50% 50%, #0A0520 0%, #050012 40%, #020010 100%)' }}
    >
      <Nebula />
      <OrbitRings ref={parallaxLayersRef} />
      <ZodiacOrbit ref={(el) => { parallaxLayersRef.current[3] = el }} />
      <StarField ref={starsRef} starsData={starsData} />
      <MainHero content={content} />
    </main>
  )
}