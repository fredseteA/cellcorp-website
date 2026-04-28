import { AboutHero, AboutMission } from "./sections"
import Contact from "@/components/Contact"

function About() {
  return (
    <main>
      <AboutHero />
      <AboutMission />
      <Contact variant="map" showHeader />
    </main>
  )
}

export default About