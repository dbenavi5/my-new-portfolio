/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from "framer-motion";
import { Experiences } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  experience: Experiences,
};

const ExperienceCard = ({experience}: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] h-[650px] md:w-[600px] md:h-[700px] xl:w-[800px] snap-center p-10 bg-amber-800 hover:opacity-100 lg:opacity-40 cursor-pointer  transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-md md:text-lg lg:text-xl xl:text-2xl  mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology?.image).url()}
              alt={''}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-amber-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-sm md:text-md lg:text-lg xl:text-lg max-h-60 overflow-y-scroll scrollbar scrollbar-track-amber-800/20 scrollbar-thumb-amber-400/80">
          {experience?.points.map((point,i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard