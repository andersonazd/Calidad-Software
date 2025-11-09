"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, Award } from "lucide-react"

interface Question {
  question: string
  options: string[]
  correctAnswer: number
}

const questions: Question[] = [
  {
    question: "¿Cuál es el estándar internacional que define las características de calidad del software?",
    options: ["ISO 9001", "ISO/IEC 25010", "ISO 27001", "IEEE 830"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué característica de calidad se refiere a la protección de datos contra accesos no autorizados?",
    options: ["Eficiencia", "Seguridad", "Usabilidad", "Portabilidad"],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál NO es uno de los principios SOLID?",
    options: ["Single Responsibility", "Open/Closed", "Don't Repeat Yourself", "Dependency Inversion"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué tipo de prueba verifica la interacción entre diferentes módulos del sistema?",
    options: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Regresión", "Pruebas de Carga"],
    correctAnswer: 1,
  },
  {
    question: "En DevOps, ¿qué práctica permite integrar cambios de código frecuentemente en el repositorio?",
    options: ["Continuous Delivery", "Continuous Deployment", "Continuous Integration", "Continuous Monitoring"],
    correctAnswer: 2,
  },
]

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(questions.length).fill(false))

  const handleAnswerSelect = (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    const newAnsweredQuestions = [...answeredQuestions]
    newAnsweredQuestions[currentQuestion] = true
    setAnsweredQuestions(newAnsweredQuestions)

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResult(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnsweredQuestions(new Array(questions.length).fill(false))
  }

  if (showResult) {
    const percentage = (score / questions.length) * 100

    return (
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="text-3xl text-primary font-bold text-center flex items-center justify-center gap-3">
            <Award className="h-8 w-8" />
            Resultados del Examen
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-4">
            <div className="text-6xl font-bold text-primary">{percentage.toFixed(0)}%</div>
            <p className="text-2xl font-semibold text-muted-foreground">
              {score} de {questions.length} respuestas correctas
            </p>
            {percentage >= 80 && <p className="text-lg font-bold text-green-600">Excelente trabajo</p>}
            {percentage >= 60 && percentage < 80 && <p className="text-lg font-bold text-blue-600">Buen desempeño</p>}
            {percentage < 60 && <p className="text-lg font-bold text-orange-600">Sigue estudiando</p>}
          </div>
          <Button onClick={handleRestart} className="w-full font-bold" size="lg">
            Reintentar Examen
          </Button>
        </CardContent>
      </Card>
    )
  }

  const isAnswered = answeredQuestions[currentQuestion]
  const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-muted-foreground">
            Pregunta {currentQuestion + 1} de {questions.length}
          </span>
          <span className="text-sm font-bold text-primary">
            Puntuación: {score}/{currentQuestion + (isAnswered ? 1 : 0)}
          </span>
        </div>
        <CardTitle className="text-2xl text-primary font-bold leading-relaxed">
          {questions[currentQuestion].question}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => {
            const isSelected = selectedAnswer === index
            const isCorrectAnswer = index === questions[currentQuestion].correctAnswer
            const showCorrectAnswer = isAnswered && isCorrectAnswer
            const showIncorrectAnswer = isAnswered && isSelected && !isCorrect

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={isAnswered}
                className={`
                  w-full text-left p-4 rounded-lg border-2 font-semibold transition-all
                  ${isSelected && !isAnswered ? "border-primary bg-primary/10" : "border-border"}
                  ${showCorrectAnswer ? "border-green-500 bg-green-500/10" : ""}
                  ${showIncorrectAnswer ? "border-red-500 bg-red-500/10" : ""}
                  ${!isAnswered && "hover:border-primary/50 hover:bg-primary/5 cursor-pointer"}
                  ${isAnswered && "cursor-not-allowed"}
                `}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showCorrectAnswer && <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />}
                  {showIncorrectAnswer && <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />}
                </div>
              </button>
            )
          })}
        </div>

        {!isAnswered && (
          <Button
            onClick={handleSubmitAnswer}
            disabled={selectedAnswer === null}
            className="w-full font-bold"
            size="lg"
          >
            Confirmar Respuesta
          </Button>
        )}

        {isAnswered && (
          <div className="space-y-4">
            <div
              className={`p-4 rounded-lg border-2 ${
                isCorrect ? "bg-green-500/10 border-green-500" : "bg-orange-500/10 border-orange-500"
              }`}
            >
              <p className="font-bold">{isCorrect ? "¡Correcto!" : "Incorrecto"}</p>
            </div>
            <Button onClick={handleNextQuestion} className="w-full font-bold" size="lg">
              {currentQuestion < questions.length - 1 ? "Siguiente Pregunta" : "Ver Resultados"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
