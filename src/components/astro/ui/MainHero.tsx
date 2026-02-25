'use client'

import { HeroContent } from '@/constants/astro-config'

interface MainHeroProps {
  content: HeroContent
}

export const MainHero = ({ content }: MainHeroProps) => {
  return (
    <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6 pointer-events-none">
      <h1
        className="animate-fade-up font-serif font-light tracking-[0.2em] sm:tracking-[0.25em] text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase select-none leading-tight"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #E8D5A8 35%, #C9A96E 65%, #8B7340 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 40px rgba(201, 169, 110, 0.15))',
        }}
      >
        {content.title}
      </h1>

      <div className="animate-fade-up-delay-1 mt-4 sm:mt-6 flex items-center gap-3 sm:gap-4">
        <div className="shimmer-line h-px w-12 sm:w-24" />
        <span className="text-[#C9A96E] text-base sm:text-lg opacity-60 font-serif">✦</span>
        <div className="shimmer-line h-px w-12 sm:w-24" />
      </div>

      <p className="animate-fade-up-delay-2 mt-6 sm:mt-8 text-xs sm:text-base font-light tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#C9A96E]/70">
        {content.status}
      </p>

      <p className="animate-fade-up-delay-3 mt-4 sm:mt-5 max-w-[280px] sm:max-w-lg text-[10px] sm:text-[13px] leading-relaxed tracking-[0.1em] sm:tracking-[0.15em] uppercase text-[#B4B4C8]/40">
        {content.description}
      </p>
    </div>
  )
}