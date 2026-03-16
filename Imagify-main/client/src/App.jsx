import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'

const App = () => {

  const {showLogin} = useContext(AppContext)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 max-w-6xl mx-auto">
        <ToastContainer position="bottom-right" theme="dark"/>
        <Navbar/>
        {showLogin && <Login/>}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/result' element={<Result/>}/>
          <Route path='/buy' element={<BuyCredit/>}/>
        </Routes>
        <Footer/>
      </div>
    </div>
  )
}

export default App
