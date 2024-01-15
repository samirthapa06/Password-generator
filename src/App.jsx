import {  useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  let [length,setlength]=useState(0);
  let [password,setPassword]=useState('');
  let [number,setNumber]=useState(false);
  let [character,setCharacter]=useState(false);

 // use ref

 let passwordReference=useRef(null)

  const copyTheCode=()=>{
    passwordReference.current?.select()
     window.navigator.clipboard.writeText(password)
  }
  
  const Generatedpassword=useCallback(()=>{
    let pass='';
    let alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let num='1234568790';
    let symbol='!@#$%^&*()_+'
    if(number){
      alphabet+=num
    }
    if(character){
      alphabet+=symbol
    }
    for(let i=0;i<=length;i++){
      let index= Math.floor(Math.random()*alphabet.length)
      pass+=alphabet[index]
    }
      console.log('hey')
      return setPassword(pass)
  
  },[length,number,character])

  useEffect(()=>{
    Generatedpassword()
  },[length,character,number])

  return (
    <>
     < h1> Password generator</h1>
      <input type='text' value={password } ref={passwordReference} /><button onClick={copyTheCode} style={{backgroundColor:'aqua'}}>copy</button>
      <br/>
      <span>{length}</span><input type='range' min={0} max={15} onChange={(e)=>{setlength(e.currentTarget.value)}}/>
      <br/>
      <span>Number</span><input type="checkbox"  onChange={()=>{setNumber((prev)=>!prev)}}/>
      <span>Character</span><input type="checkbox" onChange={()=>{setCharacter((prev)=>!prev)}} />
      
    </>
  )
}

export default App
