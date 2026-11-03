import { Route, Routes } from 'react-router'
import Footer from './components/Footer'
import Header from './components/Header'
import { useScrollToHash } from './hooks/useScrollToHash'
import Home from './pages/Home'

function App() {
  useScrollToHash()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
