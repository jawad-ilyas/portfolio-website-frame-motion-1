import React from 'react'
import KevinRushProfile from "../assets/about.jpg"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: delay }
    }
});

const AboutMe = () => {

    return (
        <div className='flex flex-col  mt-28 items-center'>
            <div className='mb-12 text-4xl'>About <span className='font-thin text-gray-400 tracking-tight'>Me</span></div>
            <div className='flex  items-center  flex-wrap'>
                <div className='flex-1 w-full flex items-center justify-start'>
                    <motion.img 
                    variants={container(0)}
                        initial="hidden"
                        whileInView="visible"


                        className=' rounded-xl' src={KevinRushProfile} />
                </div>
                <motion.div initial={{x:40 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:1 , delay:0}} className='md:flex-1 justify-center flex w-full'>
                    <p>As a MERN stack developer, I possess expertise in leveraging MongoDB, Express.js, React.js, and Node.js to create powerful and scalable web applications. With a keen eye for detail and a passion for crafting seamless user experiences, I thrive in building dynamic front-end interfaces using React.js while ensuring robust backend functionality with Node.js and Express.js. My proficiency in MongoDB allows for efficient data storage and retrieval, enabling applications to handle large volumes of information effectively. With a focus on delivering high-quality, maintainable code, I am dedicated to exceeding client expectations and driving innovation in every project I undertake. Let's collaborate to turn your vision into reality and achieve digital success together.</p>
                </motion.div>
            </div>
        </div>

    )
}

export default AboutMe