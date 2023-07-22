import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'

import Main from './Components/Main'
import Header from './Components/Header'
const App = () => {
  return (
    <div>
      <Header/>
      <Main/>
    </div>
  )
}

export default App