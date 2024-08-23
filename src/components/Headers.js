import React from 'react'

export default function Headers() {
  return (
   <div className='container mx-auto'>
     <div className=' flex justify-between items-center font-semibold  text-white py-5'>
      <a className='text-3xl' href="#">🅲🆄🅼🅰</a>
      <div className='flex gap-x-12'>
        <a href='#Home' className='transitions-all transform hover:scale-110'>Home</a>
        <a href='#AboutMe' className='transitions-all transform hover:scale-110'>About Me</a>
        <a href='#Services' className='transitions-all transform hover:scale-110'>Services</a>
        <a href='#Works' className='transitions-all transform hover:scale-110'>Portfolio</a>
      </div>
      <button className='bg-custom-gradient p-3 rounded-3xl transitions-all transform hover:scale-105'>Connect With Me</button>
    </div>
   </div>
  )
}
