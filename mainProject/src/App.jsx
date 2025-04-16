import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Movies from './pages/Movies'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Movie from './pages/Movie'
import Footer from "./components/Footer"
import './App.css'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/movies' Component={Movies} />
        <Route path='/contact' Component={Contact} />
        <Route path='/movie/:id' Component={Movie} />
        <Route path='*' Component={NotFound} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
