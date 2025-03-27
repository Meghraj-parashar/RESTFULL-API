import React from 'react'

function App() {
  async function getRes() {
    try {
      const res = await fetch('http://localhost:3000')
      const data = await res.json()
      console.log(data) // data is already parsed JSON
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <div>
      <button onClick={()=>getRes()}>Click me</button>
    </div>
  )
}

export default App