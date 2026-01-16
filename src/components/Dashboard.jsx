import { Shield, AlertTriangle, Activity } from "lucide-react"
import { getEvents, addEvent } from "../services/securityService.js"
import { useEffect, useState } from "react"

export default function Dashboard() {
    const [actions, setActions] = useState([])

    // carrega eventos ao entrar no dashboard
    useEffect(() => {
        setActions(getEvents())
    }, [])

    // helper pra adicionar evento e atualizar lista
    function handleAddEvent(event) {
        addEvent(event)
        setActions(getEvents())
    }

    return (
        <div className="min-h-screen bg-[#0b0f1a] text-white rounded-3xl p-6 space-y-12 md:p-10">

            {/* HEADER */}
            <div>
                <h2 className="font-semibold mb-4">Security Dashboard</h2>
                <p className="text-gray-400 text-sm">
                    SafeCell • Monitoramento ativo
                </p>
            </div>

            {/* CARDS */}
            <div>
                <CyberCard icon={Shield} title="Status" value="Protegido" color="green" />
                <CyberCard icon={Activity} title="Monitoramento" value="Ativo" color="blue" />
                <CyberCard icon={AlertTriangle} title="Risco" value="baixo" color="yellow" />
            </div>

            {/* AÇÕES */}
            <div className="bg-[#131A2A] rounded-2xl p-6 border border-white/10">
                <h3 className="font-semibold mb-4">Ações rápidas</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <CyberButton
                        danger
                        onClick={() =>
                            handleAddEvent({
                                title: "Dispositivo bloqueado",
                                status: "success",
                            })
                        }
                    >
                        Bloquear dispositivo
                    </CyberButton>

                    <CyberButton
                        onClick={() =>
                            handleAddEvent({
                                title: "Dispositivo localizado",
                                status: "success",
                            })
                        }
                    >
                        Localizar
                    </CyberButton>

                    <CyberButton
                        secondary
                        onClick={() =>
                            handleAddEvent({
                                title: "Relatório gerado",
                                status: "success",
                            })
                        }
                    >
                        Gerar relatório
                    </CyberButton>
                </div>
            </div>

            {/* TIMELINE */}
            <div className="bg-[#131A2A] rounded-2xl p-6 border border-white/10">
                <h3 className="font-semibold mb-4">Eventos recentes</h3>

                <ul className="space-y-4">
                    {actions.map(e => (
                        <li
                            key={e.id}
                            className="flex justify-between items-center text-sm"
                        >
                            <span className="text-gray-300">
                                {e.title}
                            </span>

                            <span
                                className={
                                    e.status === "success"
                                        ? "text-green-400"
                                        : "text-red-400"
                                }
                            >
                                {timeAgo(e.createdAt)}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

/* COMPONENTES */

function CyberCard({ icon: Icon, title, value, color }) {
    const colors = {
        green: "text-green-400",
        blue: "text-blue-400",
        yellow: "text-yellow-400",
    }

    return (
        <div className="bg-[#131A2A] rounded-2xl p-6 border border-white/10">
            <Icon className={`mb-4 ${colors[color]}`} size={28} />
            <p className="text-gray-400 text-sm">{title}</p>
            <p className={`text-xl font-bold mt-1 ${colors[color]}`}>
                {value}
            </p>
        </div>
    )
}

function CyberButton({ children, danger, secondary, onClick }) {
    let style = "bg-blue-600 hover:bg-blue-700 transition-all duration-300 cursor-pointer"

    if (danger) style = "bg-red-600 hover:bg-red-700 transition-all duration-300 cursor-pointer"
    if (secondary) style = "bg-gray-700 hover:bg-gray-600 transition-all duration-300 cursor-pointer"

    return (
        <button
            onClick={onClick}
            className={`${style} py-3 rounded-xl font-medium transition`}
        >
            {children}
        </button>
    )
}

function timeAgo(timestamp) {
    if (!timestamp) return "Agora"

    const diff = Math.floor((Date.now() - timestamp) / 60000)

    if (diff <= 0) return "Agora"
    if (diff === 1) return "1 min atrás"
    return `${diff} min atrás`
}
