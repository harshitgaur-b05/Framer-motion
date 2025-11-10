import React from 'react'
import './App.css'
import { anticipate, motion } from 'motion/react'
import ScrollComponent from './scroll/ScrollComponent'
const App = () => {

  return (
    // <div>
    //   {/* <motion.div className='box'
    //   initial={{
    //       x:0,
    //       y:5
    //     }
    //   }
    //   // animate={{x:200,
    //   //   rotate:200
    //   // }}
    //   //how to give key frames
    //   // animate={
    //   //   {//initial then them then then
    //   //     x:[0,800,800,0,0],
    //   //     y:[0,0,300,300,0],
    //   //     rotate:[0,360,0,-360,0]
    //   //   }
    //   // }
    //   whileHover={{
    //     backgroundColor:'green',
        

    //   }}
    //   whileTap={{
    //     scale:2
    //   }}
    //   drag
    //   whileDrag={{
    //     scale:0.8
    //     ,
       
    //   }}
    //    //boundy for drag
    //    dragConstraints={
    //     {
    //       left:10,
    //       top:10,
    //       right:100,
    //       bottom:178
    //     }
    //    }
    //   //  dragDirectionLock="true"
      
      
      
    //   //scroll animation
      
    //    transition={{
    //     duration:4,
    //     delay:0,
    //     repeat:3,
    //     ease:anticipate
    //   }}
    //   >

    //   </motion.div> */}
    //   <ScrollComponent/>
    // </div>
    <>
<div
  className="h-screen w-full bg-neutral-900 flex items-center justify-center"
  style={{
    backgroundImage:
      'radial-gradient(circle at 0.5px 0.5px, rgba(255,255,255,0.3) 0.6px, transparent 0)',
    backgroundSize: '20px 20px',
  }}
>
  <button className="relative group text-neutral-500 px-12 py-6 rounded-lg bg-black shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(255,255,255,0.1)]">
    Subscribe
    <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-[3/4] mx-auto"></span>
      <span className="absolute opacity-0 group-hover:opacity-500 transition-opacity duration-300 inset-x-0 bottom-0 h-[4px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-[3/4] mx-auto blur-sm"></span>
  </button>
</div>

    </>
  )
}

export default App


//animated compnetnt motion. before dev

//animate 
