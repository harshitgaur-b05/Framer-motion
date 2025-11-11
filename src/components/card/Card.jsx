import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import { Cross, CrossIcon, MessageSquare, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

const Card = () => {
    const [open, setOpen] = useState(true);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                initial={{
                    opacity:0,
                    filter:'blur(10px)',
                    scale:0.98
                }}
                exit={{
                    opacity:0,
                    scale:0.98,
                    filter:'blur(10px)'
                }}
                animate={
                    {
                        opacity:1,
                        scale:1,
                        filter:'blur(0px)'
                    }
                }
                transition={{
                    duration:1,
                    ease:'easeInOut'
                }}
                 className='min-h-118 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] w-72 flex item-center flex-col'>
                    <div className='p-3'>
                        <h2 className='text-neutral-900 font-bold  text-[14px]'>Acternity ui components</h2>
                        <p className='text-neutral-700 text-[12px] pt-2'>A collection of buitiful componts lets go on with it </p>

                    </div>
                    <div className='w-full flex items-center justify-center flex-col '>
                        <div className='pt-2 w-25 flex gap-1 items-center p-1 text-neutral-600 rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] '>
                            <img src={Logo} className='w-6 h-6 ' alt="" />
                            <p className=' text-xs'>Acternity</p>
                            <X width={14} onClick={() => setOpen(false)} height={12} />

                        </div>

                        <div className='relative w-64  rounded-2xl  mt-4 m-4 min-h-70 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] '>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.98
                                    , filter: 'blur(10px)'
                                }}
                                whileHover={{
                                    opacity: 1,
                                    scale: 1,
                                    filter: 'blur(0px)'
                                }}
                                transition={{
                                    duration: 0.2,
                                    ease: 'easeInOut'
                                }}
                                className='absolute flex flex-col w-full h-full divide-y  divide-neutral-300 '>
                                <div className='flex p-2 gap-2' >
                                    {/* logo  */}
                                    <div className='flex  justify-center items-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]  p-1 px-2 rounded-lg   '>
                                        <MessageSquare width={18} height={18} />
                                    </div>
                                    {/* heading text  */}
                                    <div>
                                        <p className=' text-[12px] font-bold  '>heading 1 this part</p>
                                        <p className=' text-[10px]'>desccription of the heading is coming here </p>
                                    </div>
                                </div>

                                <div className='flex p-2 gap-2' >
                                    {/* logo  */}
                                    <div className='flex  justify-center items-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]  p-1 px-2 rounded-lg   '>
                                        <MessageSquare width={18} height={18} />
                                    </div>
                                    {/* heading text  */}
                                    <div>
                                        <p className=' text-[12px] font-bold  '>heading 1 this part</p>
                                        <p className=' text-[10px]'>desccription of the heading is coming here </p>
                                    </div>
                                </div>

                                <div className='flex p-2 gap-2' >
                                    {/* logo  */}
                                    <div className='flex  justify-center items-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]  p-1 px-2 rounded-lg   '>
                                        <MessageSquare width={18} height={18} />
                                    </div>
                                    {/* heading text  */}
                                    <div>
                                        <p className=' text-[12px] font-bold  '>heading 1 this part</p>
                                        <p className=' text-[10px]'>desccription of the heading is coming here </p>
                                    </div>
                                </div>

                                <div className='flex p-2 gap-2' >
                                    {/* logo  */}
                                    <div className='flex  justify-center items-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]  p-1 px-2 rounded-lg   '>
                                        <MessageSquare width={18} height={18} />
                                    </div>
                                    {/* heading text  */}
                                    <div>
                                        <p className=' text-[12px] font-bold  '>heading 1 this part</p>
                                        <p className=' text-[10px]'>desccription of the heading is coming here </p>
                                    </div>
                                </div>

                                <div className='flex p-2 gap-2' >
                                    {/* logo  */}
                                    <div className='flex  justify-center items-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]  p-1 px-2 rounded-lg   '>
                                        <MessageSquare width={18} height={18} />
                                    </div>
                                    {/* heading text  */}
                                    <div>
                                        <p className=' text-[12px] font-bold  '>heading 1 this part</p>
                                        <p className=' text-[10px]'>desccription of the heading is coming here </p>
                                    </div>
                                </div>

                                <div className='flex p-2 gap-2' >
                                    {/* logo  */}
                                    <div className='flex  justify-center items-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]  p-1 px-2 rounded-lg   '>
                                        <MessageSquare width={18} height={18} />
                                    </div>
                                    {/* heading text  */}
                                    <div>
                                        <p className=' text-[12px] font-bold  '>heading 1 this part</p>
                                        <p className=' text-[10px]'>desccription of the heading is coming here </p>
                                    </div>
                                </div>
                            </ motion.div>

                        </div>
                    </div>


                </motion.div >)

            }
        </AnimatePresence>

    )
}

export default Card