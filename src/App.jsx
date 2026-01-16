import { useState } from 'react'
import Home from './components/Home'
import Emergency from './components/Emergency'
import Dashboard from './components/Dashboard'
import Header from './components/Header'

export default function App() {
  const [page, setPage] = useState('home')

  return (
    // flex-col faz o Header ficar em cima e a Home embaixo ocupando toda largura
    <div className='min-h-screen w-full flex flex-col bg-gray-900'>

      <Header />

      <main className="flex-1 w-full flex flex-col">
        {page === "home" && (
          <Home onEmergency={() => setPage("emergency")} />
        )}

        {page === "emergency" && (
          <Emergency onDone={() => setPage("dashboard")} />
        )}

        {page === "dashboard" && <Dashboard />}
      </main>

    </div>
  )
}