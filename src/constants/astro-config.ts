

export const STAR_LAYERS = [
  { count: 120, minSize: 0.5, maxSize: 1.2, parallaxFactor: 0.02, repelRadius: 100, repelForce: 30 },
  { count: 80, minSize: 1.2, maxSize: 2.0, parallaxFactor: 0.04, repelRadius: 140, repelForce: 45 },
  { count: 25, minSize: 2.0, maxSize: 3.5, parallaxFactor: 0.07, repelRadius: 180, repelForce: 60 },
]

export const symbols = [
  
]

export const ZODIAC_SYMBOLS = [
  { id: 1, name: 'Овен', symbol: '/zodiac/aries.png' },
  { id: 2, name: 'Телец', symbol: '/zodiac/taurus.png' },
  { id: 3, name: 'Близнецы', symbol: '/zodiac/gemini.png' },
  { id: 4, name: 'Рак', symbol: '/zodiac/cancer.png' },
  { id: 5, name: 'Лев', symbol: '/zodiac/leo.png' },
  { id: 6, name: 'Дева', symbol: '/zodiac/virgo.png' },
  { id: 7, name: 'Весы', symbol: '/zodiac/libra.png' },
  { id: 8, name: 'Скорпион', symbol: '/zodiac/scorpio.png' },
  { id: 9, name: 'Стрелец', symbol: '/zodiac/sagittarius.png' },
  { id: 10, name: 'Козерог', symbol: '/zodiac/capricorn.png' },
  { id: 11, name: 'Водолей', symbol: '/zodiac/aquarius.png' },
  { id: 12, name: 'Рыбы', symbol: '/zodiac/pisces.png' },
]

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
  twinkleDuration: number
  twinkleType: 'twinkle' | 'twinkle-alt'
}

export interface SeoLayout {
  title: string
  description: string
}

export const SEO_DEFAULT: SeoLayout = {
  title: 'GetAstro — Натальные карты и гороскопы',
  description: 'Готовим вашу натальную карту. Звёзды уже выстраиваются.',
}