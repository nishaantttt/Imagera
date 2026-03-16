import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'motion/react'

const Testimonials = () => {
  return (
    <motion.div
    initial={{ opacity: 0.2, y: 100}}
    transition={{ duration: 1}}
    whileInView={{ opacity: 1, y: 0}}
    viewport={{ once:true }}
    className='flex flex-col items-center justify-center my-20 py-12'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2 bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent'>
        Loved by creators everywhere
      </h1>
      <p className='text-slate-300 mb-12 text-sm sm:text-base'>Designers, marketers, and founders use Imagera to accelerate their visual workflows.</p>

      <div className='flex flex-wrap gap-6 justify-center'>
        {testimonialsData.map((testimonial, index)=>(
            <div key={index} className='bg-slate-900/80 p-8 rounded-2xl shadow-xl border border-slate-800/80 w-80 m-auto cursor-pointer hover:scale-[1.02] hover:border-indigo-500/70 transition-all'>
                <div className='flex flex-col items-center'>
                    <img src={testimonial.image} alt="" className='rounded-full w-14 ring-2 ring-indigo-500/60'/>
                    <h2 className='text-xl font-semibold mt-3 text-slate-50'>{testimonial.name}</h2>
                    <p className='text-slate-400 mb-4 text-xs uppercase tracking-[0.2em]'>{testimonial.role}</p>
                    <div className='flex mb-4'>
                        {Array(testimonial.stars).fill().map((item, index)=>(
                            <img key={index} src={assets.rating_star} alt="" />
                        ))}
                    </div>
                    <p className='text-center text-sm text-slate-300 leading-relaxed'>{testimonial.text}</p>
                </div>
            </div>
        ))}
      </div>
      
    </motion.div>
  )
}

export default Testimonials
