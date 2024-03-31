import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from "framer-motion"
export default function Experience() {
    return (
        <div className='border-b border-neutral-800 py-28'>
            <motion.div className='text-4xl mb-20 text-center' whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}>Experiences</motion.div>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className='flex mb-8 flex-wrap lg:justify-center'>
                        <motion.div initial={{x:-100 , opacity:0}} transition={{duration:1.5 , delay:0.5}} whileInView={{x:0 , opacity:1}} className='w-full lg:w-1/4'>
                            <p>{experience.year}</p>
                        </motion.div>
                        <motion.div initial={{ x: -100, opacity: 0 }} transition={{ duration: 1.5, delay: 0.5 }} whileInView={{ x: 0, opacity: 1 }} className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold '>{experience?.role} -<span className='text-purple-100'>{experience.company}</span></h6>
                            <p className='mb-4 text-neutral-400'>{experience.description}</p>
                            <div>{experience.technologies.map((tech, index) => (
                                <span key={index} className='mr-2 mt-4 rounded px-2 py-2 text-sm text-purple-800 bg-neutral-900'>{tech}</span>
                            ))}</div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}
