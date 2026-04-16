import {Hero, Problems, Ideais, NextStep, Contact} from "./sections/index"

function Home() {
  return (
    <main className="bg-dark text-white">
      <Hero />
      <Problems />
      <Ideais />
      <NextStep />
      <Contact />
    </main>
  )
}

export default Home