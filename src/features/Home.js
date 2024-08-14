
import React, { useEffect, useState } from 'react'

const Home = () => {

  const [text, setText] = useState('first value')
  const [depend, setDepend] = useState(0);

  const handleChange = (msg) => {
    setText((prev) => {
      console.log(prev);
      return msg;

    });


  }

  const handleDepend = (msg) => {
    setDepend((prev) => prev + 1);

  }


  useEffect(() => {
    console.log('effect call');
    setText('hh,hdh,hdfhfuh,gyf');
  }, [depend]);

  console.log('render');


  return (
    <div className="p-2">
      <h1>{depend}</h1>

      <button onClick={handleDepend} className="p-2 border-4 border-black  m-4 w-28 bg-black text-white font-serif font-bold hover:bg-blue-900 rounded-lg">InCrement</button>
      <br />
      <br />

      <button onClick={() => handleChange('lio')} className="p-2 border-4 border-black  m-4 w-28 bg-black text-white font-serif font-bold hover:bg-blue-900 rounded-lg">Click me</button>

      <h1>Hello text----- {text}</h1>

    </div>
  )
}

export default Home
