import type { FC } from 'react'
import Image from 'next/image'

import logo from 'public/logo.svg'
import { Counter } from 'features/counter'

export const Home: FC = () => (
  <main className="page">
    <section className="hero">
      <div className="hero__logo">
        <Image src={logo} alt="logo" />
      </div>
      <Counter />
      <p>
        Edit <code>src/app.tsx</code> and save to reload.
      </p>
      <a
        className="hero__link"
        href="https://effector.now.sh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Effector
      </a>
    </section>
  </main>
)

export default Home
