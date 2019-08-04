import React,{ useState , useEffect } from 'react'
import axios from "axios" 

export default function App() {
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
  const fetchData = async () => {
  const result = await axios(
  'http://hn.algolia.com/api/v1/search?query=redux'
  );
  setData(result.data);
  };
   fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      tnthyt
    </div>
    
  )
}
