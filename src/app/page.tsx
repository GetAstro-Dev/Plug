import Scene from '@/components/layout/Scene'
import { HERO_CONTENT } from '@/constants/astro-config'

export default function Home() {
  return (
    <div className="min-h-screen bg-cosmic-bg">
      <Scene content={HERO_CONTENT} />
    </div>
  )
}