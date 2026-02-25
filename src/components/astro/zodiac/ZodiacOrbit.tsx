'use client'

import { forwardRef } from 'react'
import Image from 'next/image'
import { ZODIAC_SYMBOLS } from '@/constants/astro-config'
import { useResponsive } from '@/hooks/useResponsive'

export const ZodiacOrbit = forwardRef<HTMLDivElement>((_, ref) => {
  const { windowSize, isMobile, isTablet } = useResponsive()
  
  // Динамический радиус: не более 40% ширины экрана на мобильных
  const radius = isMobile 
    ? Math.min(windowSize.width * 0.4, 160) 
    : isTablet ? 240 : 310
    
  const iconSize = isMobile 
    ? (windowSize.width < 360 ? 'w-8 h-8' : 'w-10 h-10') 
    : isTablet ? 'w-14 h-14' : 'w-20 h-20'
    
  const fontSize = isMobile ? 'text-[8px]' : 'text-[10px]'

  return (
    <div
      ref={ref}
      className="absolute z-2 pointer-events-none animate-fade-in-slow"
      style={{ top: '50%', left: '50%', width: 0, height: 0 }}
    >
      {ZODIAC_SYMBOLS.map((item, i) => {
        const angle = (i / ZODIAC_SYMBOLS.length) * 360
        const x = Math.cos((angle * Math.PI) / 180) * radius
        const y = Math.sin((angle * Math.PI) / 180) * radius
        
        return (
          <div
            key={item.id}
            className="absolute select-none flex flex-col items-center gap-1"
            style={{
              left: x,
              top: y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className={`relative ${iconSize} opacity-40 hover:opacity-100 transition-opacity`}>
              <Image 
                src={item.symbol} 
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>
            <span className={`${fontSize} text-[#C9A96E]/40 uppercase tracking-widest font-serif whitespace-nowrap`}>
              {item.name}
            </span>
          </div>
        )
      })}
    </div>
  )
})

ZodiacOrbit.displayName = 'ZodiacOrbit'