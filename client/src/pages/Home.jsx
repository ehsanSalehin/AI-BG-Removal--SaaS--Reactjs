import React from 'react'
import Header from '../components/Header'
import How from '../components/How'
import Slide from '../components/slide'
import Testemonials from '../components/Testemonials'
import Bottom from '../components/Bottom'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <How/>
      <Slide/>
      <Testemonials/>
      <Bottom/>
    </div>
  )
}

export default Home