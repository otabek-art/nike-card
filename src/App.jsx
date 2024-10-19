import React from 'react'
import './App.css'
import Card from './components/Card/card'
import Card2 from './components/Card/card2'

const App = () => {
  return (
  <>
  <section>
    <div className="container">
      <div className="wrap">

   <Card/>
   <Card2/>
      </div>

    </div>
  </section>
  </>
  )
}

export default App