import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import Publications from '../components/sections/Publications'
import Projects from '../components/sections/Projects'
import Activities from '../components/sections/Activities'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Publications />
      <Projects />
      <Activities />
    </>
  )
}
