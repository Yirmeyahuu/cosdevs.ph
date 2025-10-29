import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="bg-brandBlue-darkest min-h-screen">
      <Navbar />
      <Home />
      <Analytics />
    </div>
  )
}

export default App