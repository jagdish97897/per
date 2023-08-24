import { useState } from 'react'

function App() {
  const [data, setName] = useState()
  function getData(e) {
    // console.log(val.target.value)
    setName(e.target.value)

  }
  return (

    <>

      {/* <h1>{data}</h1> */}
      <h1>bihar board result</h1>
      <h3>enter yor percentage:<input type="text" onChange={getData}></input></h3>
      
      {
        (data >= 33) ?
          <h1>pass</h1>
          :
          <h1>fail</h1>

      }

    </>
  )


}

export default App;
