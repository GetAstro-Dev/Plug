export const STAR_LAYERS = [
  { count: 120, minSize: 0.5, maxSize: 1.2, parallaxFactor: 0.02, repelRadius: 100, repelForce: 30 },
  { count: 80, minSize: 1.2, maxSize: 2.0, parallaxFactor: 0.04, repelRadius: 140, repelForce: 45 },
  { count: 25, minSize: 2.0, maxSize: 3.5, parallaxFactor: 0.07, repelRadius: 180, repelForce: 60 },
]

export const ZODIAC_SYMBOLS = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓']

export interface HeroContent {
  title: string
  status: string
  description: string
}

export const HERO_CONTENT: HeroContent = {
  title: 'GetAstro',
  status: 'Сайт в разработке',
  description: 'Готовим вашу натальную карту. Звёзды уже выстраиваются.',
}

export interface StarData {
  x: number
  y: number
  size: number
  opacity: number
  layer: number
  twinkleDelay: number
  twinkleType: 'twinkle' | 'twinkle-alt'
}