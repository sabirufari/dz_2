import React, { useContext } from 'react'
import { master } from './App'
import Show from './Show'

function Language() {
    const {handleFr,handleEng} = useContext(master)
  return (
    <div>
        <Show/>
        <button onClick={handleFr}>French</button>
        <button onClick={handleEng}>Eng</button>
    </div>
  )
}

export default Language