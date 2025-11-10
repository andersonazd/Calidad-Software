"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ClipboardCheck, RotateCcw, TrendingUp } from "lucide-react"
import { Navigation } from "@/components/navigation"

interface Criterion {
    id: string
    name: string
    description: string
}

const criteria: Criterion[] = [
    {
        id: "usabilidad",
        name: "Usabilidad",
        description: "Facilidad de uso, interfaz intuitiva, navegación clara y accesibilidad",
    },
    {
        id: "funcionalidad",
        name: "Funcionalidad Educativa",
        description: "Cumplimiento de objetivos educativos, contenido apropiado y actividades interactivas",
    },
    {
        id: "rendimiento",
        name: "Rendimiento",
        description: "Velocidad de carga, tiempo de respuesta y eficiencia en el procesamiento",
    },
    {
        id: "compatibilidad",
        name: "Compatibilidad",
        description: "Funcionamiento en diferentes navegadores, dispositivos y resoluciones",
    },
    {
        id: "confiabilidad",
        name: "Confiabilidad",
        description: "Estabilidad del sistema, manejo de errores y recuperación ante fallos",
    },
    {
        id: "seguridad",
        name: "Seguridad",
        description: "Protección de datos, autenticación, privacidad y cumplimiento normativo",
    },
]

export default function EvaluacionPage() {
    const [appName, setAppName] = useState("https://cun.edu.co/")
    const [evaluatorName, setEvaluatorName] = useState("Anderson Atehortua M")
    const [evaluationDate, setEvaluationDate] = useState("2025-11-07")

    const [recommendations, setRecommendations] = useState("El aplicativo aunque cumple tiene varias fallas, entre ellas: lento en respuesta al usar moodle que a su vez usa php y al ser script tiene limitaciones de recursos, seguridad: tiene fallas en HTTP Security, Firewall , DNSSEC,HSTS, Security.Txt, entre otros (https://web-check.xyz/check/https%3A%2F%2Fcun.edu.co%2F), entre otros problemas. Recomendaciones: Contratar desarrolladores que implementen nuevas tecnologías y arquitecturas para mejorar la usabilidad, rendimiento y seguridad del aplicativo.(https://github.com/andersonazd) ")
    const [ratings, setRatings] = useState<Record<string, number>>({
        usabilidad: 3,
        funcionalidad: 4,
        rendimiento: 3,
        compatibilidad: 4,
        confiabilidad: 4,
        seguridad: 3,
    })
    const [showResults, setShowResults] = useState(true)

    const handleRating = (criterionId: string, value: number) => {
        setRatings((prev) => ({ ...prev, [criterionId]: value }))
    }

    const calculateResults = () => {
        setShowResults(true)
    }

    const resetEvaluation = () => {
        setRatings({})
        setShowResults(false)
        setAppName("")
        setEvaluatorName("")
        setEvaluationDate("")
        setRecommendations("")
    }

    const totalScore = Object.values(ratings).reduce((sum, val) => sum + val, 0)
    const maxScore = criteria.length * 5
    const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0
    const isComplete = Object.keys(ratings).length === criteria.length

    const getQualityLevel = (percent: number) => {
        if (percent >= 90) return { level: "Excelente", color: "text-green-500" }
        if (percent >= 75) return { level: "Bueno", color: "text-blue-500" }
        if (percent >= 60) return { level: "Aceptable", color: "text-yellow-500" }
        if (percent >= 40) return { level: "Regular", color: "text-orange-500" }
        return { level: "Deficiente", color: "text-red-500" }
    }

    const quality = getQualityLevel(percentage)

    return (
        <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
            <Navigation />

            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="mb-12 text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <ClipboardCheck className="h-12 w-12 text-primary" />
                        <h1 className="text-4xl md:text-5xl font-bold text-primary">Evaluación de Calidad</h1>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Evaluación Manual de Aplicativo Web Educativo
                    </p>
                    <p className="text-lg text-muted-foreground mt-2">
                        Califique cada criterio de <span className="font-bold text-red-500">0 (Malo)</span> a{" "}
                        <span className="font-bold text-green-500">5 (Excelente)</span>
                    </p>
                </div>

                {/* Information Form */}
                <Card className="max-w-4xl mx-auto mb-8 border-2">
                    <CardHeader>
                        <CardTitle className="text-2xl text-primary">Información de la Evaluación</CardTitle>
                        <CardDescription>Complete los datos básicos antes de iniciar la evaluación</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-foreground">Nombre del Aplicativo Evaluado</label>
                            <Input
                                value={appName}
                                onChange={(e) => setAppName(e.target.value)}
                                placeholder="Ej: Plataforma Educativa ABC"
                                className="text-base"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-foreground">Nombre del Evaluador</label>
                            <Input
                                value={evaluatorName}
                                onChange={(e) => setEvaluatorName(e.target.value)}
                                placeholder="Ej: Juan Pérez"
                                className="text-base"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-foreground">Fecha</label>
                            <Input
                                type="date"
                                value={evaluationDate}
                                onChange={(e) => setEvaluationDate(e.target.value)}
                                className="text-base"
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Evaluation Form */}
                <div className="max-w-4xl mx-auto space-y-6 mb-8">
                    {criteria.map((criterion) => (
                        <Card key={criterion.id} className="border-2 hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <CardTitle className="text-2xl text-primary">{criterion.name}</CardTitle>
                                <CardDescription className="text-base">{criterion.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-2">
                                        {[0, 1, 2, 3, 4, 5].map((value) => (
                                            <button
                                                key={value}
                                                onClick={() => handleRating(criterion.id, value)}
                                                className={`w-12 h-12 rounded-lg font-bold text-lg transition-all hover:scale-110 ${ratings[criterion.id] === value
                                                        ? value === 0
                                                            ? "bg-red-500 text-white scale-110"
                                                            : value <= 2
                                                                ? "bg-orange-500 text-white scale-110"
                                                                : value <= 3
                                                                    ? "bg-yellow-500 text-white scale-110"
                                                                    : value <= 4
                                                                        ? "bg-blue-500 text-white scale-110"
                                                                        : "bg-green-500 text-white scale-110"
                                                        : "bg-secondary hover:bg-secondary/80"
                                                    }`}
                                            >
                                                {value}
                                            </button>
                                        ))}
                                    </div>
                                    {ratings[criterion.id] !== undefined && (
                                        <div className="text-right min-w-[100px]">
                                            <p className="text-sm text-muted-foreground">Calificación</p>
                                            <p className="text-2xl font-bold text-primary">{ratings[criterion.id]}/5</p>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="max-w-4xl mx-auto flex gap-4 justify-center mb-12">
                    <Button onClick={calculateResults} disabled={!isComplete} size="lg" className="min-w-[200px]">
                        <TrendingUp className="mr-2 h-5 w-5" />
                        Ver Resultados
                    </Button>
                    <Button onClick={resetEvaluation} variant="outline" size="lg">
                        <RotateCcw className="mr-2 h-5 w-5" />
                        Reiniciar
                    </Button>
                </div>

                {/* Results */}
                {showResults && isComplete && (
                    <Card className="max-w-4xl mx-auto border-4 border-primary animate-in fade-in-50 zoom-in-95">
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl text-primary mb-2">Resultados de la Evaluación</CardTitle>
                            <CardDescription className="text-lg">Análisis completo del aplicativo web educativo</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Evaluation Information */}
                            {(appName || evaluatorName || evaluationDate) && (
                                <div className="p-4 bg-secondary/30 rounded-lg space-y-2">
                                    {appName && (
                                        <p className="text-foreground">
                                            <span className="font-bold text-primary">Aplicativo:</span> {appName}
                                        </p>
                                    )}
                                    {evaluatorName && (
                                        <p className="text-foreground">
                                            <span className="font-bold text-primary">Evaluador:</span> {evaluatorName}
                                        </p>
                                    )}
                                    {evaluationDate && (
                                        <p className="text-foreground">
                                            <span className="font-bold text-primary">Fecha:</span> {evaluationDate}
                                        </p>
                                    )}
                                </div>
                            )}

                            {/* Overall Score */}
                            <div className="text-center p-8 bg-secondary/50 rounded-lg">
                                <p className="text-6xl font-bold text-primary mb-2">{percentage}%</p>
                                <p className={`text-3xl font-bold ${quality.color} mb-4`}>{quality.level}</p>
                                <p className="text-xl text-muted-foreground">
                                    Puntuación Total: <span className="font-bold text-foreground">{totalScore}</span> / {maxScore} puntos
                                </p>
                            </div>

                            {/* Individual Scores */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-primary text-center mb-4">Desglose por Criterio</h3>
                                {criteria.map((criterion) => {
                                    const score = ratings[criterion.id]
                                    const percentValue = (score / 5) * 100
                                    return (
                                        <div key={criterion.id} className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="font-semibold text-foreground">{criterion.name}</span>
                                                <span className="font-bold text-primary">{score}/5</span>
                                            </div>
                                            <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                                                <div
                                                    className={`h-full transition-all duration-500 ${score <= 2
                                                            ? "bg-red-500"
                                                            : score <= 3
                                                                ? "bg-yellow-500"
                                                                : score <= 4
                                                                    ? "bg-blue-500"
                                                                    : "bg-green-500"
                                                        }`}
                                                    style={{ width: `${percentValue}%` }}
                                                />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Recommendations */}
                            <div className="mt-8 p-6 bg-secondary/30 rounded-lg">
                                <h3 className="text-xl font-bold text-primary mb-3">Recomendaciones</h3>
                                <ul className="space-y-2 text-foreground">
                                    {percentage < 60 && (
                                        <li className="flex gap-2">
                                            <span className="text-red-500">•</span>
                                            <span>
                                                Se requiere mejora significativa en múltiples áreas para alcanzar estándares de calidad mínimos.
                                            </span>
                                        </li>
                                    )}
                                    {percentage >= 60 && percentage < 75 && (
                                        <li className="flex gap-2">
                                            <span className="text-yellow-500">•</span>
                                            <span>
                                                El aplicativo cumple con requisitos básicos, pero hay áreas de oportunidad para mejorar.
                                            </span>
                                        </li>
                                    )}
                                    {percentage >= 75 && percentage < 90 && (
                                        <li className="flex gap-2">
                                            <span className="text-blue-500">•</span>
                                            <span>Buen nivel de calidad. Considere optimizar los criterios con puntuación menor a 4.</span>
                                        </li>
                                    )}
                                    {percentage >= 90 && (
                                        <li className="flex gap-2">
                                            <span className="text-green-500">•</span>
                                            <span>
                                                Excelente calidad. Mantenga los estándares actuales y continúe con mejoras incrementales.
                                            </span>
                                        </li>
                                    )}
                                    {Object.entries(ratings).some(([_, score]) => score <= 2) && (
                                        <li className="flex gap-2">
                                            <span className="text-red-500">•</span>
                                            <span>Priorice la mejora de los criterios con calificación de 0-2 puntos.</span>
                                        </li>
                                    )}
                                </ul>
                            </div>

                            {/* Final Results Section */}
                            <div className="mt-8 p-6 bg-primary/10 border-2 border-primary rounded-lg">
                                <h3 className="text-2xl font-bold text-primary mb-4 text-center">Informe Final</h3>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div className="p-4 bg-background rounded-lg">
                                            <p className="text-sm text-muted-foreground mb-1">Calificación Final</p>
                                            <p className="text-4xl font-bold text-primary">{percentage}%</p>
                                        </div>
                                        <div className="p-4 bg-background rounded-lg">
                                            <p className="text-sm text-muted-foreground mb-1">Nivel de Calidad</p>
                                            <p className={`text-2xl font-bold ${quality.color}`}>{quality.level}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-foreground">
                                            Observaciones y Recomendaciones Adicionales
                                        </label>
                                        <Textarea
                                            value={recommendations}
                                            onChange={(e) => setRecommendations(e.target.value)}
                                            placeholder="Escriba aquí sus observaciones, comentarios adicionales o recomendaciones específicas para mejorar el aplicativo..."
                                            className="min-h-[120px] text-base"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </main>
    )
}
