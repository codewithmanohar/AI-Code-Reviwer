import React from 'react'
import Input from '../components/Input'
import Output from '../components/Output'
import { ToastContainer } from 'react-toastify'

const CodeReview = () => {
  return (
   <>
    <div className='flex h-screen bg-zinc-900 gap-5 p-10 not-sm:flex-col'>
        <Input />
        <Output />
        <ToastContainer 
        autoClose={500}
        position='top-center'
        theme='dark'/>
    </div>
   </>
  )
}

export default CodeReview