import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import './App.css'
import React from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import project from "./pages/project";
import NotFound from "./pages/NotFound";
function App() {
  return (
      <div>
          <Header />
			<Routes>
				<Route
					path=''
					Component={Home}></Route>
				<Route
					path='about'
					Component={About}></Route>
				<Route
					path='projects'
				  Component={Projects}></Route>
			  <Route path="project/:id" Component={project}></Route>
				<Route
					path='contact'
				  Component={Contact}></Route>
			  <Route path='*' Component={NotFound} />
            </Routes>
          <Footer />
		</div>
	)
}

export default App

