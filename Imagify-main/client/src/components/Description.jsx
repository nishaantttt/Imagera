import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'


const Description = () => {
  return (
    <motion.div
    initial={{ opacity: 0.2, y: 100}}
    transition={{ duration: 1}}
    whileInView={{ opacity: 1, y: 0}}
    viewport={{ once:true }}
    className='flex flex-col items-center justify-center my-20 md:my-24 p-6 md:px-10 lg:px-16'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2 bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent'>
        Create AI visuals in seconds
      </h1>
      <p className='text-slate-300 mb-10 text-sm sm:text-base'>From quick concepts to polished artwork – all inside Imagera.</p>

      <div className='flex flex-col gap-8 md:gap-14 md:flex-row items-center'>
        <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-2xl shadow-2xl shadow-indigo-500/30 border border-slate-800/80 object-cover'/>
        <div className='space-y-4 text-sm sm:text-base'>
            <h2 className='text-2xl sm:text-3xl font-medium max-w-lg mb-1'>Design that moves at the speed of ideas.</h2>
            <p className='text-slate-300'>
              Imagera turns simple prompts into rich, cinematic imagery – perfect for content, product shots, storyboards, and more.
              Explore multiple directions in seconds instead of hours in a traditional editor.
            </p>
            <p className='text-slate-400'>
              No advanced skills required: just type what you imagine, refine with new prompts, and download the visuals that match your vision.
              Imagera handles the heavy lifting so you can stay in the creative flow.
            </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
