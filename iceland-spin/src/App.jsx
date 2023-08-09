import './App.css'
import CheckoutPage from './pages/CheckoutPage'
import PrizePage from './pages/PrizePage'
import { useState } from 'react'

function App() {

  const [prize, setPrize] = useState("")
  return (
    <>
      <CheckoutPage/>
      <PrizePage prize={prize} setPrize={setPrize}/>
    </>
  )
}

export default App
