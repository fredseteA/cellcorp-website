import {Hero, Problems, Ideais, NextStep} from "./sections/index"
import Contact from "@/components/Contact"

function Home() {
  return (
    <main className="bg-dark text-white">
      <Hero />
      <Problems />
      <Ideais />
      <NextStep />
      <Contact variant="dark" showHeader />
    </main>
  )
}

export default Home