import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'motion/react'

const Steps = () => {
  return (
    <motion.div
    initial={{ opacity: 0.2, y: 100}}
    transition={{ duration: 1}}
    whileInView={{ opacity: 1, y: 0}}
    viewport={{ once:true }}
    className='flex flex-col items-center justify-center my-24 md:my-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2 bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent'>
        How Imagera works
      </h1>

      <p className='text-sm sm:text-base text-slate-300 mb-10'>
        A simple, guided flow from idea to share‑ready artwork.
      </p>

      <div className='space-y-4 w-full max-w-3xl text-sm'>
          {stepsData.map((item, index) =>(
            <div
              key={index}
              className='flex items-center gap-4 p-5 px-6 bg-slate-900/70 border border-slate-800/80 cursor-pointer hover:bg-slate-800/80 hover:border-indigo-500/60 hover:scale-[1.02] transition-all duration-300 rounded-2xl'
            >
                <img width={40} src={item.icon} alt="" />
                <div>
                  <h2 className='text-base sm:text-lg font-medium text-slate-50'>{item.title}</h2>
                  <p className='text-xs sm:text-sm text-slate-300 mt-1'>{item.description}</p>
                </div>
            </div>
          ))}
      </div>

    </motion.div>
  )
}

export default Steps
