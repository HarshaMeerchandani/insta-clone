import  React, { useState } from 'react'
import Component1 from './Component1';

export default function App() {
  const [state, setstate] = useState("Harsha")
  return (
    <div>
      <Component1 name="Harsha"></Component1>
      <Component1 name="1" markpoints="10"></Component1>
      <Component1 name="2"></Component1>
      <Component1 name="3"></Component1>
      <Component1 name="4"></Component1>
      <Component1 name="5"></Component1>
      <h1>{ state }</h1>
      <button onClick={() => setstate("12")}>Click on it</button>
    </div>


  )
}
