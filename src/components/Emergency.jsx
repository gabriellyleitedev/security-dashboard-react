import { useEffect, useRef, useState } from "react"
import { addEvent } from "../services/securityService.js"

export default function Emergency({ onDone }) {
  const [seconds, setSeconds] = useState(5)
  const hasLogged = useRef(false) // evita duplicar evento

  useEffect(() => {
    if (seconds === 0) {
      if (!hasLogged.current) {
        addEvent({
          title: "Modo emergência ativado",
          status: "alert",
        })
        hasLogged.current = true
      }

      onDone()
      return
    }

    const timer = setTimeout(() => {
      setSeconds(prev => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [seconds, onDone])

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-center px-6 max-w-md w-full animate-pulse">

        <h1 className="text-red-600 text-4xl md:text-5xl font-extrabold mb-4">
          BLOQUEIO ATIVADO
        </h1>

        <p className="text-gray-300 text-lg mb-6">
          Seu dispositivo foi bloqueado automaticamente para proteger seus dados.
        </p>

        <div className="text-white text-6xl font-bold mb-6">
          {seconds}
        </div>

        <p className="text-gray-500 text-sm">
          Redirecionando para o painel de segurança...
        </p>
      </div>
    </div>
  )
}
