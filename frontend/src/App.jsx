import React, { useState } from "react";
import axios from "axios";
function App() {
  let [username, setUsername] = useState(null);
  let [age, setAge] = useState(null);
  let [city, setCity] = useState(null);
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
    // axios
    //   .get("http://localhost:3000")
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //   });
    axios.post("http://localhost:3000", {
      username: username,
      age: age,
      city: city
    }).then((res) => {
      console.log(res.data);
    }
    ).catch((error) => {
      console.error("Error fetching data:", error);
  });
  }

  return (
    <div>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={age}
        placeholder="age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        value={city}
        placeholder="city"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => getRes()}>Click me</button>
    </div>
  );
}

export default App;
