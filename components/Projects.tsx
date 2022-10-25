/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-amber-400 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-amber-800/20 scrollbar-thumb-amber-400/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="lg:w-[450px] lg:h-[275px]"
              src={urlFor(project.image).url()}
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="">
                  Case study {i + 1} of {projects.length}:{" "}
                </span>
                <Link href={project.linkToBuild}>
                  <a
                    className="cursor-pointer underline decoration-[#F7AB0A]/50 hover:text-amber-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.title}
                  </a>
                </Link>
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {project.technologies.map((technology) => (
                  <img
                    className="h-6 w-6 rounded-full"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt={""}
                  />
                ))}
              </div>
              <p className="text-sm text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
