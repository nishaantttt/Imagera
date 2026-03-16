import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'motion/react'


const BuyCredit = () => {

  const {user} = useContext(AppContext)

  return (
    <motion.div
    initial={{ opacity: 0.2, y: 100}}
    transition={{ duration: 1}}
    whileInView={{ opacity: 1, y: 0}}
    viewport={{ once:true }}
    className='min-h-[70vh] text-center pt-14 mb-12'>
      <button className='border border-slate-600/80 bg-slate-900/70 px-8 py-2 rounded-full mb-5 text-xs uppercase tracking-[0.25em] text-slate-300'>
        Imagera credits
      </button>
      <h1 className='text-center text-3xl sm:text-4xl font-semibold mb-3 bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent'>
        Choose the plan that fits your flow
      </h1>
      <p className='text-slate-300 text-sm sm:text-base mb-10 max-w-2xl mx-auto'>
        Top up credits only when you need them. No subscriptions, no surprises.
      </p>

      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, index)=>(
          <div
            key={index}
            className='bg-slate-900/80 border border-slate-800/80 rounded-2xl py-10 px-8 text-slate-200 hover:border-indigo-500/70 hover:scale-105 transition-all duration-300 shadow-xl shadow-slate-950/60 min-w-[260px]'
          >
            <img width={40} src={assets.logo_icon} alt="" className='mb-4' />
            <p className='mt-1 mb-1 font-semibold text-lg'>{item.id}</p>
            <p className='text-xs uppercase tracking-[0.25em] text-slate-400 mb-3'>One-time credit pack</p>
            <p className='text-sm text-slate-300'>{item.desc}</p>
            <p className='mt-6'>
              <span className='text-3xl font-semibold text-slate-50'>₹{item.price}</span>
              <span className='text-slate-400 text-sm'> / {item.credits} credits</span>
            </p>
            <button className='w-full bg-slate-50 text-slate-950 mt-7 text-sm rounded-full py-2.5 min-w-52 hover:bg-indigo-400 hover:text-white transition-colors duration-300'>
              {user ? 'Purchase credits' : 'Get started with Imagera'}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default BuyCredit
