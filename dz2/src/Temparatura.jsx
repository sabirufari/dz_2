import React, { useContext } from 'react'
import { temper } from './App'

function Temparatura() {
const {handleChangeTemp,temp} = useContext(temper)
  return (
    <div>
    <h1>{temp}</h1>
    <button onClick={handleChangeTemp}>change Temparature</button>
    </div>
  )
}

export default Temparatura