/* eslint-disable no-empty-pattern */
import Image from 'next/image'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import HeroPic from './assets/ben-kolde-6c8qrsQN_lY-unsplash.jpg'
import Link from 'next/link'

type Props = {}

function Hero({}: Props) {
  const [text] = useTypewriter({
    words: [
      'Hi, My Name is Diana Benavides',
      'She-who-likes-to-eat.tsx',
      '<ButLovesToCodeMore  />',
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <div className="relative w-48 h-48 mx-auto p-5">
        <Image
          priority
          className="absolute rounded-full"
          src={HeroPic}
          alt={''}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className='z-20'>
        <h2 className="text-sm uppercase text-amber-500 pb-4 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#fbbf24" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
