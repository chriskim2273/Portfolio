import { useEffect, useRef, useState } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  const leadingPath = '/Portfolio';
  return (
    <main className='h-full w-full'>
      <Router>
        <NavBar />
        <div className="mt-10 border-t border-black-500 w-full" />
        <Routes>
          <Route path={leadingPath + "/"} exact element={<Home />} />
          <Route path={leadingPath + "/about"} exact element={<About />} />
          <Route path={leadingPath + "/projects"} exact element={<Projects />} />
          <Route path={leadingPath + "/contact"} exact element={<Contact />} />
        </Routes>
      </Router>
    </main >
  )
}

export default App
