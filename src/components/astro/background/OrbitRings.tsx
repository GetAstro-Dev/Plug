'use client'

import { forwardRef } from 'react'
import { useResponsive } from '@/hooks/useResponsive'

// Принимаем (HTMLDivElement | null)[] чтобы избежать конфликта типов
export const OrbitRings = forwardRef<(HTMLDivElement | null)[]>((_, ref) => {
  const { windowSize, isMobile, isTablet } = useResponsive()
  
  const baseSizes = isMobile 
    ? [windowSize.width * 0.7, windowSize.width * 1.0, windowSize.width * 1.4] 
    : isTablet 
      ? [400, 550, 750] 
      : [550, 700, 900]

  return (
    <div className="absolute inset-0 z-1 pointer-events-none">
      {baseSizes.map((size, i) => (
        <div
          key={size}
          ref={(el) => {
            if (ref && 'current' in ref && ref.current) {
              ref.current[i] = el
            }
          }}
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            border: `1px solid rgba(201, 169, 110, ${0.1 - i * 0.03})`,
            transform: 'translate(-50%, -50%)',
            animation: i % 2 === 0 ? 'ring-pulse 25s linear infinite' : 'ring-pulse-reverse 30s linear infinite',
          }}
        />
      ))}
    </div>
  )
})

OrbitRings.displayName = 'OrbitRings'