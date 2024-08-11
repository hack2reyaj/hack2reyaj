import React from 'react'

const Info = () => {
  return (
    <div className='space-y-4'>
      <h1 className="text-center font-semibold text-3xl">Who am I</h1>
      <div className='h-[400px] w-[300px] bg-black rounded-full mx-auto border-[5px] border-green-600 flex flex-col justify-center items-center '>

        <div className='text-white'>


          <p >Name : Some Person</p>
          <p >Email: someperson@gmail.com</p>
          <p>Tel: +9777777</p>
          <p>Age: 25</p>
          <p>Experience: Python,Java,Dart</p>
        </div>

      </div>

    </div>
  )
}

export default Info
