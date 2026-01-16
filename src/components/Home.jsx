export default function Home({ onEmergency }) {
  return (
    <div className="w-full flex-1 flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800">

      <div className="w-full max-w-lg bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl text-center space-y-10">

        <span className="inline-block text-sm uppercase tracking-widest text-red-500">
          Segurança em tempo real
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Seu celular foi roubado?
        </h2>

        <p className="text-gray-300 text-base md:text-lg">
          Bloqueie o dispositivo imediatamente e proteja seus dados pessoais.
        </p>

        <button
          onClick={onEmergency}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-red-500/20 cursor-pointer">
          🚨 Fui roubado
        </button>

        <p className="text-xs text-gray-400">
          Ação imediata • Sem burocracia
        </p>
      </div>
    </div>
  )
}
