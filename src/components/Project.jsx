import React from 'react'
import { PROJECTS } from '../constants'
import {motion} from "framer-motion"
export default function Project() {
    return (
        <div className='py-28 border-b border-neutral-800'>
            <motion.div initial={{opacity:0 , y:-100}} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.5 }}>
                <h1 className='text-center text-4xl pb-8'>Project</h1>
            </motion.div>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.3, delay: 0.5 }} className='w-full lg:w-1/4'>
                            <img src={project.image} width={150} height={150} className='mb-6 rounded' alt={project.title} />
                        </motion.div>
                        <div className='w-full max-w-xl lg:w-3/4' whileInView={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1, delay: 0+index }} >
                            <h6 className='mb-2 font-semibold'>{project.title}</h6>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            <div>{project.technologies.map((tech, index) => (
                                <span key={index} className='mr-2 mt-4 rounded px-2 py-1 text-sm text-purple-800 bg-neutral-900'>{tech}</span>
                            ))}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
