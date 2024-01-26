import { useState } from 'react'
// import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import Income from './components/Income'
import History from './components/History'
import Trans from './components/Trans'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Balance/>
    <Income/>
    <History/>
    <Trans/>
    </>
  )
}

export default App
