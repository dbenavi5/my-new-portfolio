/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from "framer-motion";
import SfsuPic from './assets/altumcode-dMUt0X3f59Q-unsplash.jpg'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-amber-800 hover:opacity-100 lg:opacity-40 cursor-pointer  transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={SfsuPic.src}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Backend Assistant</h4>
        <p className="font-bold text-2xl mt-1">
          San Francisco State University
        </p>
        <div className="flex space-x-2 my-2">
          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
        </div>
        <p className="uppercase py-5 text-amber-300">
          Started work... - Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-xl">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard