import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './posts'
import Products from './products'

function App() {

//rendering
const [render,setRender] = useState(false)


const handleStatus =()=>{
  setRender(!render)
}
console.log(render)
  // const [count, setCount] = useState(0)
  // useEffect(()=>{
  //   console.log("hello from useEffect")
  // },[count])

  // const addCount= ()=>{
  // setCount(count + 1)
  // }
  // const minusCount= ()=>{
  // setCount(count - 1)
  // }

  // const information = {
  //   message: "secret message",
  //   phone:"0832949265"
  // }

  return (
    <>
    <button onClick={handleStatus}>Hello status</button>
     
      {/* <h1>use state</h1>
       <div>
    <h3>this is state Count :{count}</h3> */}
  
  {/* </div>
<button onClick={addCount}>state Count</button>
<button onClick={minusCount}>minus Count</button> */}
  {/* <Products data={information}></Products> */}
 
      {/* <ol>
        <li>Component</li>
        <li>jsx</li>
        <li>props</li>
        <li>event handler</li>
        <li>state</li>
        <li>load data</li>
      </ol>
      <br /> */}
  
     {/* <Posts></Posts> */}
    </>
  )
}

export default App
