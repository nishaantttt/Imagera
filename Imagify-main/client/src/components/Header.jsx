import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { delay, motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const {user, setShowLogin} = useContext(AppContext)
  const navigate= useNavigate()

  const onClickHandler = ()=>{
    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }
  }

  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-16 md:my-20'
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity: 1,y:0}}
    viewport={{once: true}}
    >

      <motion.div className='inline-flex items-center gap-2 bg-slate-900/60 px-4 sm:px-6 py-1.5 rounded-full border border-slate-700 shadow-lg shadow-indigo-500/20'
      initial={{opacity:0.2, y:-20}}
      animate={{opacity: 1,y:0}}
      transition={{delay: 0.2,duration:0.8}}
      >
        <span className='h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse' />
        <p className='text-[11px] sm:text-xs uppercase tracking-[0.25em] text-slate-300'>
          Powered by AI · Imagera
        </p>
      </motion.div>

      <motion.h1 className='text-4xl max-w-[320px] sm:text-6xl sm:max-w-[620px] lg:text-7xl lg:max-w-[720px] mx-auto mt-8 text-center font-semibold leading-tight tracking-tight'>
        Bring your ideas to life with
        <span
          className='block mt-2 bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.4, duration: 2}}
        >
          Imagera’s AI image studio
        </span>
      </motion.h1>

      <motion.p className='max-w-xl mx-auto mt-5 text-sm sm:text-base text-slate-300'
      initial={{opacity: 0, y:20}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.6, duration: 0.8}}
      >Describe anything in words and let Imagera instantly turn it into cinematic, high‑resolution visuals for your next post, project, or prototype.</motion.p>

      <motion.button onClick={onClickHandler} className='sm:text-lg text-slate-950 bg-slate-50 w-auto mt-8 px-10 sm:px-12 py-2.5 flex items-center gap-2 rounded-full shadow-xl shadow-indigo-500/30 hover:bg-indigo-400 hover:text-white hover:scale-105 transition-all duration-300'
      whileHover={{ scale:1.05 }}
      whileTap={{ scale:0.95 }}
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ default: { duration: 0.5 }, opacity: {delay: 0.8, duration: 1} }}
      >
        Start creating with Imagera
        <img className='h-6' src={assets.star_group} alt="" />
      </motion.button>

      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 1, duration: 1}}
      className='flex flex-wrap justify-center mt-14 gap-3'>
        {Array(6).fill('').map((item,index)=>(
            <motion.img
            whileHover={{ scale: 1.05, duration: 0.1}}
            className='rounded hover: scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} alt="" key={index} width={70}/>
        ))}
      </motion.div>

      <motion.p
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 1.2, duration: 0.8}}
      className='mt-3 text-slate-400 text-xs sm:text-sm tracking-wide uppercase'>
        Generated with Imagera
      </motion.p>
    </motion.div>
  )
}

export default Header
