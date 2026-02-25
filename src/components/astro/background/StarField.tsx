'use client'

import { forwardRef } from 'react'
import { StarData } from '@/constants/astro-config'

interface StarFieldProps {
  starsData: StarData[]
}

// Изменяем generic тип: первый параметр — это тип передаваемого ref
export const StarField = forwardRef< (HTMLDivElement | null)[], StarFieldProps >(({ starsData }, ref) => {
  return (
    <div className="absolute inset-0 z-3 pointer-events-none">
      {starsData.map((star, i) => (
        <div
          key={i}
          ref={(el) => {
            if (ref) {
              if (typeof ref === 'function') {
                // Обработка случая, если ref — это функция (редко, но для TS важно)
              } else {
                (ref.current as (HTMLDivElement | null)[])[i] = el
              }
            }
          }}
          className="star absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: 0,
            ['--star-opacity' as string]: star.opacity,
            backgroundColor:
              star.layer === 2 ? '#D2BE96' : star.layer === 1 ? '#DCDC0F0' : '#FFFFFF',
            animation: `${star.twinkleType} ${4 + Math.random() * 6}s ease-in-out ${star.twinkleDelay}s infinite`,
          }}
        />
      ))}
    </div>
  )
})

StarField.displayName = 'StarField'