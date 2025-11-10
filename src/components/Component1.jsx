import React from 'react'
import { anticipate, motion } from 'motion/react'
const Component = () => {
  return (
   <div
  className="[prespective::1000px] [transform-style:preserve-3d] h-screen w-full bg-neutral-900 flex items-center justify-center"
  style={{
    backgroundImage:
      'radial-gradient(circle at 0.5px 0.5px, rgba(255,255,255,0.3) 0.6px, transparent 0)',
    backgroundSize: '20px 20px',
  }}
>
  <motion.button 
  initial={{
    rotate:0
  }}
  // animate={
  //   {
  //     rotate:[0,10,0]
  //   }
  // }
  // transition={{ 
  //   duration:1.5,
  //   ease:"easeInOut"
  // }}
  whileHover={{
    rotateX:20,
    rotateY:20,
    boxShadow:"0px 20px 50px rgba(8,112,184,0.7)"
  }}
  style={{
    translateZ:100
  }}
  
  className="relative group text-neutral-500 px-12 py-6 rounded-lg bg-black shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(255,255,255,0.1)]">
    Subscribe
    <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-[3/4] mx-auto"></span>
      <span className="absolute opacity-0 group-hover:opacity-500 transition-opacity duration-300 inset-x-0 bottom-0 h-[4px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-[3/4] mx-auto blur-sm"></span>
  </motion.button>
</div>
  )
}

export default Component
