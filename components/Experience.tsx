import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experiences } from "../typings";

type Props = {
  experiences: Experiences[],
};

const Experience = ({experiences}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-amber-400 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-mandatory scrollbar scrollbar-track-amber-800/20 scrollbar-thumb-amber-400/80">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={ experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
