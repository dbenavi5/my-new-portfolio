/* eslint-disable no-empty-pattern */
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from 'framer-motion';

type Props = {};

function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale:1,
                }}
                transition={{
                    duration:1.5,
                }}
                className="flex flex-row items-center">
                {/* Social Icons */}
                <SocialIcon
                    url="https://linkedin.com/in/diana-c-benavides"
                    fgColor="#fbbf24"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://github.com/dbenavi5"
                    fgColor="#fbbf24"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://www.facebook.com/dbenavi5/"
                    fgColor="#fbbf24"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://twitter.com/dianab_415"
                    fgColor="#fbbf24"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://www.pinterest.com/dbenavidb/"
                    fgColor="#fbbf24"
                    bgColor="transparent"
                />
            </motion.div>
            {/* Navbar */}
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale:1,
                }}
                transition={{
                    duration:1.5,
                }}
                className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon
                    className="cursor-pointer"
                    network="email"
                    fgColor="#fbbf24"
                    bgColor="transparent"
                />
                <p className='uppercase hidden md:inline-flex text-sm text-amber-400'>Get in touch</p>
            </motion.div>
        </header>
    );
}

export default Header;