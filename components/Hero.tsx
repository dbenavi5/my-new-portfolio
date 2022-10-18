import Image from 'next/image'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import Link from 'next/link'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  pageInfo: PageInfo,
}

function Hero({pageInfo}: Props) {
  const [text] = useTypewriter({
    words: [
      `Hi, My Name is ${pageInfo?.name}`,
      'She-who-likes-to-eat.tsx',
      '<ButLovesToCodeMore  />',
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <div className="relative w-32 h-32 mx-auto p-5">
        <Image
          priority
          className="absolute rounded-full"
          src={urlFor(pageInfo?.heroImage).url()}
          alt={''}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className='z-20'>
        <h2 className="text-sm uppercase text-amber-500 pb-4 tracking-[15px]">
          {pageInfo?.role}
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
