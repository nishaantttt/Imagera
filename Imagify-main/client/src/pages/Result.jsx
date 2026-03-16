import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
import { AppContext } from '../context/AppContext'

const Result = () => {

  const [image, setImage] = useState(assets.sample_img_1)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')

  const {generateImage} = useContext(AppContext)
  
  const onSubmitHandler = async (e) =>{
    e.preventDefault()
    setLoading(true)

    if(input){
      const image = await generateImage(input)
      if(image){
        setIsImageLoaded(true)
        setImage(image)
      }
    }
    setLoading(false)
  }

  return (
    <motion.form
    initial={{ opacity: 0.2, y: 100}}
    transition={{ duration: 1}}
    whileInView={{ opacity: 1, y: 0}}
    viewport={{ once:true }}
    onSubmit={onSubmitHandler} className='flex flex-col min-h-[80vh] justify-center items-center'>
      <div className='flex flex-col md:flex-row gap-10 md:gap-14 items-center w-full max-w-5xl'>
        <div className='relative'>
          <img src={image} alt="" className='max-w-sm rounded-2xl border border-slate-800/80 shadow-2xl shadow-indigo-500/30 object-cover'/>
          <span className={`absolute bottom-0 left-0 h-1 bg-indigo-400 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`}/>
        </div>
        <div className='space-y-3 text-left'>
          <p className='text-xs uppercase tracking-[0.25em] text-slate-400'>Imagera canvas</p>
          <h2 className='text-2xl sm:text-3xl font-semibold text-slate-50'>Refine your prompt, perfect your image.</h2>
          <p className='text-sm text-slate-300 max-w-md'>
            Write a clear description of what you want to see – style, mood, colors, and subject. Imagera will generate a unique visual tailored to your words.
          </p>
          {loading && <p className='text-xs text-indigo-300 mt-2'>Generating your image… this usually takes a few seconds.</p>}
        </div>
      </div>

    {!isImageLoaded &&
      <div className='flex w-full max-w-xl bg-slate-900/80 border border-slate-700 text-sm p-1 mt-10 rounded-full backdrop-blur'>
        <input 
        onChange={e => setInput(e.target.value)} value={input}
        type="text" placeholder='A neon cyberpunk city at dusk, ultra wide shot' className='flex-1 bg-transparent outline-none ml-6 sm:ml-8 max-sm:w-20 placeholder-colour text-slate-100'/>
        <button type='submit' className='bg-slate-50 text-slate-950 px-8 sm:px-14 py-2.5 sm:py-3 rounded-full text-sm font-medium hover:bg-indigo-400 hover:text-white transition-colors duration-300'>
          Generate
        </button>
      </div>
      }

    {isImageLoaded &&  
      <div className='flex gap-3 flex-wrap justify-center text-sm p-0.5 mt-10 rounded-full'>
        <p
          onClick={()=>{setIsImageLoaded(false)}}
          className='bg-transparent border border-slate-600 text-slate-100 px-8 py-3 rounded-full cursor-pointer hover:border-indigo-400/80 transition-colors'
        >
          Generate another
        </p>
        <a
          href={image}
          download
          className='bg-slate-50 text-slate-950 px-10 py-3 rounded-full cursor-pointer hover:bg-emerald-400 hover:text-white transition-colors'
        >
          Download
        </a>
      </div>
    }

    </motion.form>
  )
}

export default Result
