import {Hero, Problems, Ideais, NextStep} from "./sections/index"

function Home() {
  return (
    <main className="bg-dark text-white">
      <Hero />
      <Problems />
      <Ideais />
      <NextStep />
    </main>
  )
}

export default Home