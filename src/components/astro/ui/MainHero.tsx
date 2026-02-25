'use client'

import { HeroContent } from '@/constants/astro-config'

interface MainHeroProps {
  content: HeroContent
}

export const MainHero = ({ content }: MainHeroProps) => {
  return (
    <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pointer-events-none">
      <h1
        className="animate-fade-up font-serif font-light tracking-[0.25em] text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase select-none"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #E8D5A8 35%, #C9A96E 65%, #8B7340 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 40px rgba(201, 169, 110, 0.15))',
        }}
      >
        {content.title}
      </h1>

      <div className="animate-fade-up-delay-1 mt-6 flex items-center gap-4">
        <div className="shimmer-line h-px w-16 sm:w-24" />
        <span className="text-[#C9A96E] text-lg opacity-60 font-serif">✦</span>
        <div className="shimmer-line h-px w-16 sm:w-24" />
      </div>

      <p className="animate-fade-up-delay-2 mt-8 text-sm sm:text-base font-light tracking-[0.4em] uppercase text-[#C9A96E]/70">
        {content.status}
      </p>

      <p className="animate-fade-up-delay-3 mt-5 max-w-lg text-xs sm:text-[13px] leading-relaxed tracking-[0.15em] uppercase text-[#B4B4C8]/40">
        {content.description}
      </p>
    </div>
  )
}