import { useState } from 'react'
import '../App.css'
import PasswordInput from './PasswordInput'
import SubmitButton from './SubmitButton'

function App() {

  return (
    <div>
      <h1>Password Tracker</h1>

      <PasswordInput/>
      <br />
      <br />
      <SubmitButton/>
    </div>
  )
}

export default App
