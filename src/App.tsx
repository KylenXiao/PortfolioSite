import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import SoftwareEngineering from './pages/SoftwareEngineering'
import MachineLearning from './pages/MachineLearning'
import GameDev from './pages/GameDev'
import ArtGallery from './pages/ArtGallery'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/software" element={<SoftwareEngineering />} />
            <Route path="/ml" element={<MachineLearning />} />
            <Route path="/gamedev" element={<GameDev />} />
            <Route path="/art" element={<ArtGallery />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App