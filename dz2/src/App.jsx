import { createContext, useState } from 'react'
import './App.css'
import Language from './Language'
import Temparatura from './Temparatura'
export const master = createContext(null)
export const temper = createContext(null)
function App() {
  const [lang,setLang]= useState('English')
  const [temp,setTemp ]= useState(0)
  const handleChangeTemp = ()=>{
    setTemp(Math.floor(Math.random()*70))
  }
  const handleEng =()=>{
    setLang('English')
  }
  const handleFr =()=>{
    setLang('French')
  }
  return (
    <div className="App">
      <master.Provider value={{lang,handleEng,handleFr}}>
      <temper.Provider value={{handleChangeTemp,temp}}>
        <Temparatura/>
      </temper.Provider>
        <Language/>
      </master.Provider>
    </div>
  )
}

export default App
