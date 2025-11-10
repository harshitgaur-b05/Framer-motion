import React from 'react'

const Card = () => {
  return (
    <div className='min-h-108 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] w-72 flex flex-col'>
        <div className='p-3'>
        <h2 className='text-neutral-900 font-bold  text-[14px]'>Acternity ui components</h2>
        <p className='text-neutral-700 text-[12px] pt-2'>A collection of buitiful componts lets go on with it </p>

        </div>
        <div className='pt-2 '>
            logo
        </div>

    </div>
  )
}

export default Card