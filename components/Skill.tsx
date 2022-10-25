import React from "react";
import { motion } from "framer-motion";
import { SkillSet } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skills: SkillSet;
  directionLeft?: boolean;
};

const Skill = ({ skills, directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skills?.image).url()}
        alt=""
        className="rounded-full border border-amber-500 object-cover w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-black w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-white">
            {skills.progress}
            {"%"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
