import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateBtn = () => {

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
    <motion.div
    initial={{ opacity: 0.2, y: 100}}
    transition={{ duration: 1}}
    whileInView={{ opacity: 1, y: 0}}
    viewport={{ once:true }}
    className='pb-20 text-center'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold py-6 md:py-14 bg-gradient-to-r from-indigo-200 via-sky-200 to-emerald-200 bg-clip-text text-transparent'>
        Ready to see what Imagera can do?
      </h1>

      <button
        onClick={onClickHandler}
        className='inline-flex items-center gap-2 px-10 sm:px-12 py-3 rounded-full bg-slate-50 text-slate-950 m-auto hover:bg-indigo-400 hover:text-white hover:scale-105 transition-all duration-500 shadow-xl shadow-indigo-500/30'
      >
        Generate your first image
        <img src={assets.star_group} alt="" className='h-6'/>
      </button>
    </motion.div>
  )
}

export default GenerateBtn
