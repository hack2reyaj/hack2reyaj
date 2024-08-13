
import React, { useState } from 'react'

const Home = () => {

  const [text, setText] = useState('first value')





  const handleChange = (msg) => {
    setText((prev) => {
      console.log(prev);
      return msg;

    });


  }

  console.log('render');


  return (
    <div className="p-2">

      <button onClick={() => handleChange('lio')} className="p-2 border-4 border-black  m-4 w-28 bg-black text-white font-serif font-bold hover:bg-blue-900 rounded-lg">Click me</button>

      <h1>Hello text----- {text}</h1>

    </div>
  )
}

export default Home
