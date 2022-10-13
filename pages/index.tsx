import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className='bg-[#78350f] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <section id='hero' className='snap-center'>
        <Hero/>
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About/>
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  )
}

export default Home
