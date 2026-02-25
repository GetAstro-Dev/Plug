'use client'

export const Nebula = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div
        className="absolute top-[30%] left-1/2 w-200 h-200 -translate-x-1/2 -translate-y-1/2 opacity-20"
        style={{
          background: 'radial-gradient(ellipse, rgba(100, 50, 180, 0.4) 0%, transparent 70%)',
          animation: 'nebula-breathe 12s ease-in-out infinite',
        }}
      />
      <div
        className="absolute top-[60%] left-[30%] w-150 h-150 -translate-x-1/2 -translate-y-1/2 opacity-10"
        style={{
          background: 'radial-gradient(ellipse, rgba(180, 120, 60, 0.3) 0%, transparent 70%)',
          animation: 'nebula-breathe-alt 15s ease-in-out infinite',
        }}
      />
    </div>
  )
}