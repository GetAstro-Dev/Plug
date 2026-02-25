'use client'

import { useResponsive } from '@/hooks/useResponsive'

export const Nebula = () => {
  const { isMobile, isTablet } = useResponsive()
  
  const size1 = isMobile ? 'w-[300px] h-[300px]' : isTablet ? 'w-[500px] h-[500px]' : 'w-[800px] h-[800px]'
  const size2 = isMobile ? 'w-[250px] h-[250px]' : isTablet ? 'w-[400px] h-[400px]' : 'w-[600px] h-[600px]'

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div
        className={`absolute top-[30%] left-1/2 ${size1} -translate-x-1/2 -translate-y-1/2 opacity-20`}
        style={{
          background: 'radial-gradient(ellipse, rgba(100, 50, 180, 0.4) 0%, transparent 70%)',
          animation: 'nebula-breathe 12s ease-in-out infinite',
        }}
      />
      <div
        className={`absolute top-[60%] left-[30%] ${size2} -translate-x-1/2 -translate-y-1/2 opacity-10`}
        style={{
          background: 'radial-gradient(ellipse, rgba(180, 120, 60, 0.3) 0%, transparent 70%)',
          animation: 'nebula-breathe-alt 15s ease-in-out infinite',
        }}
      />
    </div>
  )
}