import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function App() {
  const [data, setData] = useState([])
useEffect(() => {
const fetchData = async () => {
const result = await axios.delete('https://jsonplaceholder.typicode.com/posts/1',{
  "userId": "thehhe",
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" 
},)
setData(result.data)
}
fetchData()
}, [])
console.log(data,"-------------responce from server")
  return (
 //   <div>
// {data.map(item => (
// <div key={item.id}>
// <h1>{item.title}</h1>
// <h1>{item.title}</h1>

// </div>
// ))}
<button />
//</div>
  )
}

