import  React, { useState } from 'react'
import Glowing from './Glowing';

export default function App() {
  const [glowing, setGlowing] = useState(false)
  return (
      <div> { glowing ? <Glowing name="harsha1"/> : "no" }
      <button onClick={() => (setGlowing(!glowing))}>Click Me</button>
      </div>
  )
}
