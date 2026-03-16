import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'motion/react'
import axios from 'axios'
import { toast } from 'react-toastify'


const Login = () => {

    const [state, setState] = useState('Login')
    const {setShowLogin, backendUrl, setToken, setUser, setCredit} = useContext(AppContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) =>{
        e.preventDefault();

        try {
            
            if(state === 'Login'){
                const {data} = await axios.post(backendUrl + '/api/user/login', {email, password})

                if(data.success){
                    setToken(data.token)
                    setUser(data.user)
                    setCredit(data.credits)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                }else{
                    toast.error(data.message)
                }
            }else{
                const {data} = await axios.post(backendUrl + '/api/user/register', {name, email, password})

                if(data.success){
                    setToken(data.token)
                    setUser(data.user)
                    setCredit(data.credits)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                }else{
                    toast.error(data.message)
                }
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        document.body.style.overflow = 'hidden';

        return ()=>{
            document.body.style.overflow = 'unset';
        }
    },[])

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        
        <motion.form onSubmit={onSubmitHandler}
        initial={{ opacity: 0.2, y: 50}}
        transition={{ duration: 0.3}}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once:true }}
        className='relative bg-slate-950/95 border border-slate-800 px-8 py-9 sm:px-10 sm:py-10 rounded-2xl text-slate-200 shadow-2xl shadow-slate-950/80 min-w-[320px] max-w-md'>
            <h1 className='text-center text-2xl text-slate-50 font-semibold'>
              {state === 'Login' ? 'Welcome back to Imagera' : 'Create your Imagera account'}
            </h1>
            <p className='text-xs sm:text-sm text-slate-400 mt-2 text-center'>
              Sign {state === 'Login' ? 'in to access your credits and creations.' : 'up in seconds and start generating images.'}
            </p>

            {state !== 'Login' && <div className='border border-slate-700 bg-slate-900/80 px-5 py-2.5 flex items-center gap-2 rounded-full mt-6'>
                <img src={assets.profile_icon} width={23} alt="" className='rounded-full' />
                <input onChange={e => setName(e.target.value)} value={name} type="text" className='outline-none text-sm bg-transparent placeholder-colour' placeholder='Full name' required/>
            </div>}

            <div className='border border-slate-700 bg-slate-900/80 px-6 py-2.5 flex items-center gap-2 rounded-full mt-4'>
                <img src={assets.email_icon} alt="" />
                <input onChange={e => setEmail(e.target.value)} value={email} type="email" className='outline-none text-sm bg-transparent placeholder-colour' placeholder='Email address' required/>
            </div>

            <div className='border border-slate-700 bg-slate-900/80 px-6 py-2.5 flex items-center gap-2 rounded-full mt-4'>
                <img src={assets.lock_icon} alt="" />
                <input onChange={e => setPassword(e.target.value)} value={password} type="password" className='outline-none text-sm bg-transparent placeholder-colour' placeholder='Password' required/>
            </div>

            <p className='text-xs text-indigo-300 my-4 cursor-pointer text-right hover:text-indigo-200 transition-colors'>
              Forgot password?
            </p>

            <button type='submit' className='bg-slate-50 text-slate-950 w-full py-2.5 rounded-full text-sm font-medium hover:bg-indigo-400 hover:text-white transition-colors'>
              {state === 'Login' ? 'Login' : 'Create account'}
            </button>

            {state === 'Login' ? (
              <p className='mt-5 text-center text-xs sm:text-sm text-slate-300'>
                Don&apos;t have an account?
                <span className='text-indigo-300 cursor-pointer ml-1 hover:text-indigo-200' onClick={()=>setState('Sign Up')}>
                  Sign up
                </span>
              </p>
            ) : (
              <p className='mt-5 text-center text-xs sm:text-sm text-slate-300'>
                Already have an account?
                <span className='text-indigo-300 cursor-pointer ml-1 hover:text-indigo-200' onClick={()=>setState('Login')}>
                  Login
                </span>
              </p>
            )}

            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" className='absolute top-4 right-4 cursor-pointer opacity-80 hover:opacity-100 transition-opacity'/>
        </motion.form>
    </div>
  )
}

export default Login
