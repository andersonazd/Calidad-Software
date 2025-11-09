import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, FileCode, Settings, CheckCircle } from "lucide-react"

export default function EstandaresPage() {
  const solidPrinciples = [
    { letter: "S", title: "Responsabilidad Única", description: "Una clase debe tener una sola razón para cambiar" },
    { letter: "O", title: "Abierto/Cerrado", description: "Abierto para extensión, cerrado para modificación" },
    {
      letter: "L",
      title: "Sustitución de Liskov",
      description: "Los objetos deben ser reemplazables por instancias de sus subtipos",
    },
    {
      letter: "I",
      title: "Segregación de Interfaces",
      description: "Muchas interfaces específicas son mejores que una general",
    },
    { letter: "D", title: "Inversión de Dependencias", description: "Depender de abstracciones, no de concreciones" },
  ]

  const cleanCodePrinciples = [
    "Nombres descriptivos y significativos",
    "Funciones pequeñas y enfocadas",
    "Evitar duplicación de código",
    "Separación de responsabilidades",
    "Comentarios útiles y escasos",
    "Formateo consistente y legible",
  ]

  const tools = [
    { name: "SonarQube", description: "Análisis de bugs, vulnerabilidades y deuda técnica" },
    { name: "ESLint", description: "Linting para JavaScript y TypeScript" },
    { name: "PMD", description: "Detección de malas prácticas en Java" },
    { name: "Checkstyle", description: "Verificación de estándares de codificación" },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <section className="mb-16 text-center">
          <Badge className="mb-4 bg-primary text-primary-foreground font-bold">Clean Code</Badge>
          <h1 className="text-5xl font-bold text-primary mb-6">Estándares de Programación</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-semibold leading-relaxed">
            Reglas y convenciones que definen buenas prácticas en la escritura de código fuente, logrando claridad,
            mantenibilidad, legibilidad y seguridad.
          </p>
        </section>

        {/* Clean Code Principles */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold text-primary">Principios de Código Limpio</h2>
          </div>

          <div className="bg-secondary rounded-2xl p-8 mb-8">
            <p className="text-lg font-semibold text-muted-foreground leading-relaxed mb-6">
              Desarrollados por <span className="text-primary">Robert C. Martin</span>, enfatizan legibilidad,
              simplicidad y claridad en el código.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {cleanCodePrinciples.map((principle, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <p className="font-semibold text-foreground">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLID Principles */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Settings className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold text-primary">Principios SOLID</h2>
          </div>

          <p className="text-lg font-semibold text-muted-foreground mb-8 leading-relaxed">
            Cinco principios fundamentales de la programación orientada a objetos que promueven código mantenible,
            escalable y robusto.
          </p>

          <div className="grid gap-6">
            {solidPrinciples.map((principle, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-foreground">{principle.letter}</span>
                    </div>
                    <CardTitle className="text-2xl text-primary font-bold">{principle.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-muted-foreground leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <FileCode className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold text-primary">Herramientas de Análisis Estático</h2>
          </div>

          <p className="text-lg font-semibold text-muted-foreground mb-8 leading-relaxed">
            Las herramientas de análisis estático permiten revisar el código sin ejecutarlo, detectando errores,
            vulnerabilidades y malas prácticas de forma automatizada.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary font-bold">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-muted-foreground leading-relaxed">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-primary/10 border-2 border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">💡 Ejemplo de Implementación</h3>
            <p className="font-semibold text-muted-foreground leading-relaxed">
              <span className="text-primary font-bold">Caso:</span> Un equipo de desarrollo integra SonarQube en su
              pipeline de CI/CD. Cada commit es analizado automáticamente, detectando code smells, bugs potenciales y
              vulnerabilidades de seguridad. El equipo establece quality gates que impiden el merge de código con deuda
              técnica crítica, mejorando significativamente la calidad del producto final.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
