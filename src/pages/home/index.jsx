import {Hero, Problems, Ideais, NextStep} from "./sections/index"
import Contact from "@/components/Contact"

function Home() {
  return (
    <main className="bg-dark text-white">
      <Hero />
      <Problems />
      <Ideais />
      <NextStep />
      <ContatoSection variant="dark" showMap={false} /> 
    </main>
  )
}

export default Home