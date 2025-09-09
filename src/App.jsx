import React from 'react'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Main from './components/Main'
import ProjectDetail from './components/ProjectDetail'
import ScrollToTop from './components/ScrollToTop'
import CardUiUx from './assets/card/UIUX'

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop/>
      <div className="bg-gray-900 text-gray-100 min-h-screen">
        <Routes>
          {/* Halaman utama */}
          <Route path="/" element={<Main />} />

          {/* Halaman detail project */}
          <Route path="/project/:type/:id" element={<ProjectDetail />} />

        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
