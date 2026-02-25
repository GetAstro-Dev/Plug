'use client'

import { forwardRef } from 'react'
import { ZODIAC_SYMBOLS } from '@/constants/astro-config'

export const ZodiacOrbit = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-2 pointer-events-none animate-fade-in-slow"
      style={{ top: '50%', left: '50%', width: 0, height: 0 }}
    >
      {ZODIAC_SYMBOLS.map((symbol, i) => {
        const angle = (i / 12) * 360
        const radius = 310
        const x = Math.cos((angle * Math.PI) / 180) * radius
        const y = Math.sin((angle * Math.PI) / 180) * radius
        return (
          <span
            key={symbol}
            className="absolute font-serif select-none text-[#C9A96E]/20 text-[18px]"
            style={{
              left: x,
              top: y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {symbol}
          </span>
        )
      })}
    </div>
  )
})

ZodiacOrbit.displayName = 'ZodiacOrbit'