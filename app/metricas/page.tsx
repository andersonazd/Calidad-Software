import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Activity, Target, TrendingUp } from "lucide-react"

export default function MetricasPage() {
  const metricTypes = [
    {
      title: "Métricas de Producto",
      icon: Target,
      description: "Analizan características internas del software",
      examples: ["Complejidad ciclomática", "Defectos por módulo", "Tamaño del código (KLOC)", "Duplicación de código"],
    },
    {
      title: "Métricas de Proceso",
      icon: Activity,
      description: "Miden eficiencia en actividades del desarrollo",
      examples: [
        "Tiempo de desarrollo",
        "Productividad del equipo",
        "Velocidad de entregas",
        "Esfuerzo estimado vs real",
      ],
    },
    {
      title: "Métricas de Proyecto",
      icon: TrendingUp,
      description: "Evalúan planificación y cumplimiento",
      examples: ["Cumplimiento de cronogramas", "Desviación de costos", "ROI del proyecto", "Satisfacción del cliente"],
    },
  ]

  const keyMetrics = [
    {
      name: "Densidad de Defectos",
      formula: "Defectos / KLOC",
      description: "Número de defectos por cada mil líneas de código. Indica la calidad general del software.",
      example: "Si un módulo de 5000 líneas tiene 15 defectos, la densidad es 3 defectos/KLOC.",
    },
    {
      name: "Complejidad Ciclomática",
      formula: "M = E - N + 2P",
      description:
        "Mide el número de caminos linealmente independientes en el código. Alta complejidad implica menor mantenibilidad.",
      example: "Una función con 3 condiciones if anidadas tiene mayor complejidad que una función lineal.",
    },
    {
      name: "Cobertura de Pruebas",
      formula: "(Líneas ejecutadas / Total líneas) × 100",
      description: "Porcentaje del código que es ejecutado por las pruebas automatizadas.",
      example: "Si las pruebas ejecutan 850 de 1000 líneas, la cobertura es del 85%.",
    },
    {
      name: "Índice de Mantenibilidad",
      formula: "MI = 171 - 5.2×ln(V) - 0.23×G - 16.2×ln(LOC)",
      description: "Combina volumen de Halstead (V), complejidad ciclomática (G) y líneas de código (LOC).",
      example: "Valores entre 0-100, donde mayor valor indica mejor mantenibilidad.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <section className="mb-16 text-center">
          <Badge className="mb-4 bg-primary text-primary-foreground font-bold">Medición de Calidad</Badge>
          <h1 className="text-5xl font-bold text-primary mb-6">Métricas de Calidad</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-semibold leading-relaxed">
            Medidas cuantitativas que permiten evaluar distintos aspectos del producto, proceso y proyecto de
            desarrollo, proporcionando datos objetivos para tomar decisiones.
          </p>
        </section>

        {/* Types of Metrics */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <BarChart3 className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold text-primary">Tipos de Métricas</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {metricTypes.map((type, index) => (
              <Card
                key={index}
                className="border-2 border-primary/20 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary font-bold">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-muted-foreground mb-4 leading-relaxed">{type.description}</p>
                  <div className="space-y-2">
                    {type.examples.map((example, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm font-semibold text-foreground">{example}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Metrics */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary mb-8">Métricas Clave</h2>

          <div className="grid gap-6">
            {keyMetrics.map((metric, index) => (
              <Card key={index} className="border-2 border-primary/20">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <CardTitle className="text-2xl text-primary font-bold">{metric.name}</CardTitle>
                    <Badge variant="outline" className="font-mono font-bold text-primary border-primary w-fit">
                      {metric.formula}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-semibold text-muted-foreground leading-relaxed">{metric.description}</p>
                  <div className="bg-secondary rounded-lg p-4">
                    <p className="text-sm font-semibold text-foreground">
                      <span className="text-primary font-bold">📊 Ejemplo:</span> {metric.example}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tools and Implementation */}
        <section>
          <h2 className="text-4xl font-bold text-primary mb-8">Recolección de Métricas</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary font-bold">Automatizada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-muted-foreground mb-4 leading-relaxed">
                  Herramientas que recopilan métricas de forma continua:
                </p>
                <ul className="space-y-2">
                  <li className="font-semibold">
                    <span className="text-primary">•</span> SonarQube - Análisis completo de calidad
                  </li>
                  <li className="font-semibold">
                    <span className="text-primary">•</span> JUnit - Cobertura de pruebas unitarias
                  </li>
                  <li className="font-semibold">
                    <span className="text-primary">•</span> CodeClimate - Mantenibilidad y deuda técnica
                  </li>
                  <li className="font-semibold">
                    <span className="text-primary">•</span> Coveralls - Seguimiento de cobertura
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary font-bold">Mejora Continua</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-muted-foreground mb-4 leading-relaxed">
                  Uso estratégico de las métricas:
                </p>
                <ul className="space-y-2">
                  <li className="font-semibold">
                    <span className="text-primary">•</span> Detectar tendencias y puntos críticos
                  </li>
                  <li className="font-semibold">
                    <span className="text-primary">•</span> Tomar decisiones basadas en evidencia
                  </li>
                  <li className="font-semibold">
                    <span className="text-primary">•</span> Establecer líneas base y metas de calidad
                  </li>
                  <li className="font-semibold">
                    <span className="text-primary">•</span> Comparar versiones y evolución del código
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
