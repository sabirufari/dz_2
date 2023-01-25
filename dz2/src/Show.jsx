import React, { useContext } from 'react'
import { master } from './App'

function Show() {
    const {lang}= useContext(master)
  return (
    <div>
        {lang}
    </div>
  )
}

export default Show