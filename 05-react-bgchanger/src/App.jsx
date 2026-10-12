import { useState } from 'react'


function App() {

  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center top-1/3 left-4 -translate-y-1/2  px-2'>
        <div className='flex flex-wrap flex-col justify-center gap-3 shadow-lg bg-amber-50 px-3 py-2 rounded-3xl '>
          <button onClick={() =>setColor("red")} className='outline-none px-4 rounded-full text-amber-50' style={{backgroundColor: "red"}}>
            Red
          </button>
          <button onClick={() =>setColor("green")} className='outline-none px-4 rounded-full text-amber-50' style={{backgroundColor: "green"}}>
            Green
          </button>
          <button onClick={() =>setColor("yellow")} className='outline-none px-4 rounded-full text-black' style={{backgroundColor: "yellow"}}>
            Yellow
          </button>
          <button onClick={() =>setColor("orange")} className='outline-none px-4 rounded-full text-black' style={{backgroundColor: "orange"}}>
            Orange
          </button>
          <button onClick={() =>setColor("gray")} className='outline-none px-4 rounded-full text-black' style={{backgroundColor: "gray"}}>
            Gray
          </button>
          <button onClick={() =>setColor("pink")} className='outline-none px-4 rounded-full text-black' style={{backgroundColor: "pink"}}>
            Pink
          </button>
          <button onClick={() =>setColor("purple")} className='outline-none px-4 rounded-full text-white' style={{backgroundColor: "purple"}}>
            Purple
          </button>
          <button onClick={() =>setColor("lavender")} className='outline-none px-4 rounded-full text-black' style={{backgroundColor: "lavender"}}>
            Lavender
          </button>
          <button onClick={() =>setColor("white")} className='outline-none px-4 rounded-full text-black' style={{backgroundColor: "white"}}>
            White
          </button>
          <button onClick={() =>setColor("black")} className='outline-none px-4 rounded-full text-white' style={{backgroundColor: "black"}}>
            Black
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
