import React from 'react'
import './App.css'
import Card from './components/Card/Card'
import Card2 from './components/Card/Card2'

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