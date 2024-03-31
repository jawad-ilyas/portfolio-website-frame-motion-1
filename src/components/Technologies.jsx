import React from 'react'
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});


export default function Technologies() {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.div className='text-center text-4xl my-20' whileInView={{opacity:1 , y:0}} transition={{duration:1 , delay:1}} initial={{y:-100 , opacity:0}} >Technologies</motion.div>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsFill size={50} className='text-cyan-400' />
                </motion.div>

               <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <TbBrandNextjs size={50} className='text-white' />
                 </motion.div>
               <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-4'>

                    <FaNodeJs size={50} className='text-green-500' />
                 </motion.div>

               <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-4'>

                    <SiExpress size={50} className='text-white' />
                 </motion.div>
               <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-4'>

                    <DiMongodb size={50} className='text-green-400' />
                 </motion.div>
               <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-4'>

                    <RiJavascriptLine size={50} className='text-yellow-200' />
                 </motion.div>
            </div>
        </div >
    )
}
