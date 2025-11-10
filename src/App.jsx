import React from 'react'
import './App.css'

import ScrollComponent from './scroll/ScrollComponent'
import Component from './components/Component1'
import Component2 from './components/Component2'
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
    {/* <Component/> */}
    <div className='w-full min-h-screen '>    <Component2/></div>

    </>
  )
}

export default App


//animated compnetnt motion. before dev

//animate 
