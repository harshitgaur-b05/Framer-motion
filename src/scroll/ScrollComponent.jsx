import React from 'react'
import { motion,useScroll } from 'motion/react'
import { div } from 'motion/react-client'
const ScrollComponent = () => {
    const {scrollYProgress}=useScroll();
    return (
    <>
    <div style={{
        scaleX:scrollYProgress
    }}></div>
     < motion.div
      style={{
        width: "300px",
        height: "200px",
        overflowY: "scroll",
        border: "1px solid #ccc",
        padding: "10px",
        color:"white"
      }}
    >
      <p>Some long text here...</p>
      <p>Another paragraph...</p>
      <p>More content...</p>
      <p>Keep scrolling...</p>
      <p>And more... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus adipisci magnam reiciendis architecto dolorem. Voluptatem, quod esse asperiores ratione unde animi delectus facere necessitatibus ducimus voluptate ea, alias temporibus commodi.</p>
    </motion.div>
    </>
   
  )
}

export default ScrollComponent