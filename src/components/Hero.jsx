import React from 'react'
import heroImage from "../assets/kevinRushProfile.jpg"
import { motion } from "framer-motion"
const container = (delay) => ({

    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }

})
const Hero = () => {
    return (
        <div className='flex flex-row flex-wrap'>
            <div className='flex-1 flex flex-col justify-center '>

                <motion.p
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className='pb-8 font-thin tracking-tight text-3xl md:text-6xl'>
                    JAWAD MUGHAL
                </motion.p>
                <motion.p variants={container(0.5)}
                    initial="hidden"
                    animate="visible" className='bg-gradient-to-r from-purple-300 via-slate-500 to-purple-500 text-2xl md:text-4xl bg-clip-text tracking-tight text-transparent'>FULL STACK DEVELOPER</motion.p>
                <motion.p variants={container(1)}
                    initial="hidden"
                    animate="visible" className='py-6 max-w-xl font-light tracking-tight'>As a full-stack developer, I specialize in building robust and dynamic web applications that meet the unique needs of clients. From crafting intuitive user interfaces to designing efficient backend systems, I ensure seamless functionality and an exceptional user experience. With expertise in front-end technologies like HTML, CSS, and JavaScript, paired with backend frameworks such as Node.js and databases like MongoDB, I deliver tailor-made solutions that drive business growth and success. Let's collaborate to bring your ideas to life and elevate your online presence.</motion.p>
            </div>
            <div className='md:flex-1 w-full flex items-center justify-end'>
                <motion.img initial={{x:100 ,opacity: 0}} animate={{x:0 , opacity: 1}} transition={{duration: 1 , delay:1.2}} src={heroImage} />
            </div>
        </div >
    )
}

export default Hero