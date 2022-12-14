import React from 'react'
import { motion } from "framer-motion";
import Skill from './Skill';
import { SkillSet } from '../typings';

type Props = {
  skills:SkillSet[]
};

const Skills = ({skills}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-amber-400 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-amber-200 text-sm">
        Hover over skill to check current proficiency
      </h3>
      <div className="grid grid-cols-4 lg:grid-cols-5 gap-5 mt-20">
      {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skills={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skills={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills