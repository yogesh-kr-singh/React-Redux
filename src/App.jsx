import React from 'react'
import "./App.css"
import Account from './Components/Account'
import Bonus from './Components/Bonus'
import { useSelector } from 'react-redux'


const App = () => {
  const amount=useSelector(state=>state.account.amount)
  const bonus=useSelector(state=>state.bonus.points)
  return (
    <div className='w-[100vw] h-[100vh]'>
      <div className='flex flex-col justify-center items-center w-[100%] h-[27%] bg-purple-300 gap-5'>
        <h1 className='text-[2.5rem] font-bold text-blue-950 shadow-md px-5 mt-2 rounded-lg'>Parent Component</h1>
        <div className='flex flex-col justify-center items-center'>
        <h2 className='text-[2rem] font-semibold text-blue-950'>Amount : {amount}</h2>
        <h2 className='text-[2rem] font-semibold text-blue-950'>Bonus Points : {bonus}</h2>
        </div>
      </div>
      <div className='h-[70%] flex'>
        <Account />
        <Bonus />
      </div>
    </div>
  )
}

export default App