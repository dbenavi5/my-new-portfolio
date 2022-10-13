/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import AboutPic from './assets/me.png'

type Props = {}

const About = (props: Props) => {
  return (
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{opacity: 1}}
          transition={{duration:1.5}}
          className="relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-amber-400 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        src={AboutPic.src}
        alt={""}
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#fde047]/50">little</span>{" "}
          backgroud:
        </h4>
        <p className='text-base'>
          Hi there! My name is Diana and welcome to my portfolio. Here&apos;s a
          little about me... Born and raised in the beautiful city of San
          Francisco. I am first generation of my family to attend and achieve a
          college degree in Computer Science at San Francisco State University.
          Along my journey I discovered my passion for building fully functional
          and responsive projects while also learning about new technologies. I
          am always looking forward to work on new projects and I also enjoy
          creating websites that is completetly user-friendly. I am a diligent
          web developer with 4 years of experience in commercial web application
          development.
        </p>
      </div>
    </motion.div>
  );
}

export default About
