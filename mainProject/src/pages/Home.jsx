import React from 'react'
import HeroBanner from '../components/home/HeroBanner'
import Trending from '../components/home/Trending'
import Row from '../components/home/Row'
function Home() {
  return (
    <div>
      <HeroBanner />
      <Row />
      <Trending />
    </div>
  )
}

export default Home
