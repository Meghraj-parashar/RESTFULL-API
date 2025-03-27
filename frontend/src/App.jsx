import React from 'react'
import axios from 'axios'
function App() {
  async function getRes() {
                 //connecting using fetch
    // try {
    //   const res = await fetch('http://localhost:3000')
    //   const data = await res.json()
    //   console.log(data) // data is already parsed JSON
    // } catch (error) {
    //   console.error('Error fetching data:', error)
    // }
                //connecting using axios
    axios.get('http://localhost:3000')
    .then((res) => {
      console.log(res.data)
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    })  
    
          
  }

  return (
    <div>
      <button onClick={()=>getRes()}>Click me</button>
    </div>
  )
}

export default App