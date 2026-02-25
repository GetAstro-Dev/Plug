'use client'

import { useState, useEffect } from 'react'

export const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowSize.width < 640
  const isTablet = windowSize.width >= 640 && windowSize.width < 1024
  const isLaptop = windowSize.width >= 1024 && windowSize.width < 1440
  const isDesktop = windowSize.width >= 1440

  return { windowSize, isMobile, isTablet, isLaptop, isDesktop }
}
