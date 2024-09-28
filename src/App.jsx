import { useState } from 'react'
import Email from './components/Email'
import Password from './components/Password'
import Code from './components/Code'
import './App.css'

function App() {

    const [togglePass, setTogglePass] = useState(false)
    
    const [toggleCode, setToggleCode] = useState(false)
    const [email, setEmail] = useState('')
  return (
    <>
      {toggleCode?<Code emailValaue={email}/>:<div className="bg">
        {togglePass?<Password toggle1={{toggleCode, setToggleCode}}/>:<Email emailValaue = {{email,setEmail}} toggle = {{togglePass, setTogglePass}}/>}
      </div>}
    </>
  )
}

export default App
