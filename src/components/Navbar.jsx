import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='max-w-screen-xl py-6 mx-auto flex items-center justify-between border-b-[1px] border-zinc-700'>
        <div className='nleft flex items-center'>

        <div className='links flex ml-20 gap-14'>
        {["Home", "Work", "Culture", "", "News"].map((ele, index) => (
        ele.length === 0 ? <span key={index}  className='w-[2px] h-7 bg-zinc-700'></span> :
        <a
        key={index} 
        className='font-regular text-sm gap-1 flex items-center'>
            {index === 1 && <span style={{ boxShadow: "0 0 0.45em #00FF19" }} className='inline-block w-1 h-1 rounded-full bg-green-500'></span>}
            {ele}
        </a>
        ))}       
        </div>
        </div>
        <Button/>
        
    </div>
  )
}

export default Navbar