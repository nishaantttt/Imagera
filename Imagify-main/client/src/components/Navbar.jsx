import React,{ useContext } from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';


const Navbar = () => {

    const {user, setShowLogin, logout, credit} =  useContext(AppContext)

    const navigate = useNavigate()

  return (
    <nav className="flex items-center justify-between py-5 sticky top-0 z-20 backdrop-blur-xl bg-slate-950/60 border-b border-slate-800">
      <Link to='/' className="flex items-center gap-2">
        <img src={assets.logo} alt="Imagera logo" className="w-8 sm:w-9 lg:w-10" />
        <div className="flex flex-col">
          <span className="text-sm sm:text-base font-semibold tracking-tight">Imagera</span>
          <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-[0.2em]">AI image studio</span>
        </div>
      </Link>

      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={()=>navigate('/buy')}
              className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-400/40 px-4 sm:px-6 py-2 rounded-full hover:bg-indigo-500/20 hover:scale-105 transition-all duration-300"
            >
              <img className="w-5" src={assets.credit_star} alt="" />
              <p className="text-xs sm:text-sm font-medium text-slate-100">
                Credits left:&nbsp;
                <span className="text-indigo-300">{credit}</span>
              </p>
            </button>
            <p className="text-slate-300 max-sm:hidden text-sm">
              Hi,&nbsp;<span className="font-medium">{user.name}</span>
            </p>
            <div className="relative group">
              <img src={assets.profile_icon} className="w-10 rounded-full ring-2 ring-slate-700 shadow-lg" alt="" />
              <div className="absolute hidden group-hover:block top-10 right-0 z-30 text-slate-100 rounded-xl pt-2">
                <ul className="list-none m-0 p-2 bg-slate-900/95 backdrop-blur-xl border border-slate-700 text-sm rounded-xl shadow-xl min-w-[140px]">
                  <li className="px-3 py-2 text-slate-300 text-xs border-b border-slate-700 mb-1">
                    Signed in as<br/><span className="font-medium">{user.email}</span>
                  </li>
                  <li
                    onClick={logout}
                    className="py-2 px-3 cursor-pointer rounded-lg hover:bg-red-500/10 hover:text-red-300 transition-colors"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 sm:gap-6">
            <button
              onClick={()=>navigate('/buy')}
              className="text-xs sm:text-sm text-slate-300 hover:text-slate-50 hover:underline underline-offset-4 decoration-slate-500"
            >
              Pricing
            </button>
            <button
              onClick={()=>setShowLogin(true)}
              className="bg-slate-50 text-slate-950 px-6 sm:px-9 py-2 text-xs sm:text-sm rounded-full font-medium shadow-lg shadow-indigo-500/30 hover:bg-indigo-400 hover:text-white transition-all duration-300"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
