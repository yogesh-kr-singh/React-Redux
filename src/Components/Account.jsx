import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decAmount, incAmount } from '../Action/action.js'

const Account = () => {
    const amount=useSelector(state=>state.account.amount)
    const bonus=useSelector(state=>state.bonus.points)

    
    const dispatch= useDispatch()
  return (
    <div className='w-[50%] h-[100%] flex justify-center items-center'>
        <div className='w-[550px] px-[5rem] py-12 rounded-xl shadow-lg bg-slate-200/50 shadow-indigo-300 mb-6'>
            <h2 className='text-[1.85rem] font-semibold'>Account Child Component</h2>
            <h2 className=' mt-5 text-[1.5rem] font-semibold'>Amount: {amount}</h2>
            <div className='flex gap-5 mt-8 items-center'>

                <button className='bg-cyan-300 hover:bg-cyan-400 font-semibold w-[70%] py-3 text-[1.5rem] rounded-xl shadow-md shadow-indigo-300 mb-2' onClick={() => dispatch(incAmount())}>Increment</button>

                <button className='bg-red-600 hover:bg-red-700 text-white font-semibold w-[70%] py-3 text-[1.5rem] rounded-xl shadow-md shadow-indigo-300 mb-2' onClick={() => dispatch(decAmount())}>Decrement</button>
            </div>
        </div>
    </div>
    
  )
}

export default Account