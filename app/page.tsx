import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Users, Wrench, Target, TrendingUp, CheckCircle2 } from "lucide-react"
import { Quiz } from "@/components/quiz"

export default function HomePage() {
  const characteristics = [
    {
      icon: Shield,
      title: "Seguridad",
      description:
        "Protección de la información y los datos para que personas o sistemas no autorizados no puedan leerlos o modificarlos.",
    },
    {
      icon: Zap,
      title: "Eficiencia",
      description: "Rendimiento en relación con la cantidad de recursos utilizados bajo condiciones establecidas.",
    },
    {
      icon: Users,
      title: "Usabilidad",
      description: "Facilidad con la que los usuarios pueden utilizar el software para lograr un objetivo específico.",
    },
    {
      icon: Wrench,
      title: "Mantenibilidad",
      description:
        "Facilidad con la que un sistema puede ser modificado para corregir fallos o mejorar su funcionamiento.",
    },
    {
      icon: Target,
      title: "Funcionalidad",
      description:
        "Capacidad del software para proporcionar funciones que satisfagan las necesidades declaradas e implícitas.",
    },
    {
      icon: TrendingUp,
      title: "Fiabilidad",
      description:
        "Capacidad para desempeñar las funciones especificadas cuando se usa bajo condiciones y período de tiempo determinados.",
    },
  ]

  const benefits = [
    {
      title: "Reducción de Errores",
      description:
        "Disminuye significativamente los fallos post-entrega, evitando costos adicionales de corrección y mantenimiento.",
    },
    {
      title: "Experiencia del Usuario",
      description: "Mejora la satisfacción y retención de usuarios al ofrecer un producto confiable y fácil de usar.",
    },
    {
      title: "Mantenimiento Eficiente",
      description:
        "Facilita la evolución del sistema y la incorporación de nuevas funcionalidades sin comprometer la estabilidad.",
    },
    {
      title: "Reputación Organizacional",
      description: "Aumenta la confianza en la marca y posiciona positivamente a la empresa en el mercado.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <Badge className="mb-4 bg-primary text-primary-foreground font-bold">ISO/IEC 25010</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 text-balance">Calidad de Software</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-semibold leading-relaxed">
            Modelos y normas internacionales que establecen principios, criterios y metodologías para asegurar la
            calidad del proceso de desarrollo y del producto resultante.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">Pon a Prueba tus Conocimientos</h2>
          <p className="text-center text-muted-foreground mb-8 font-semibold max-w-2xl mx-auto">
            Responde estas preguntas para evaluar tu comprensión sobre calidad de software.
          </p>
          <div className="max-w-3xl mx-auto">
            <Quiz />
          </div>
        </section>

        {/* Características ISO 25010 */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">Características de Calidad</h2>
          <p className="text-center text-muted-foreground mb-12 font-semibold max-w-2xl mx-auto">
            El estándar ISO/IEC 25010 define las características clave que todo software de calidad debe cumplir.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characteristics.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 border-2">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-primary font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-semibold leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Importancia */}
        <section className="mb-20">
          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">
              Importancia de la Calidad en el Software
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground font-semibold leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Estrategias */}
        <section>
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">Estrategias para Asegurar la Calidad</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary font-bold">Planificación de la Calidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-muted-foreground leading-relaxed">
                  Establecer objetivos, métricas y estándares de calidad desde las fases iniciales del proyecto. Definir
                  un plan de aseguramiento de calidad que abarque todo el ciclo de vida.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary font-bold">Verificación Continua</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-muted-foreground leading-relaxed">
                  Implementar revisiones de código, pruebas unitarias, de integración y de sistema de manera
                  sistemática. Utilizar herramientas de análisis estático y dinámico.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary font-bold">Validación con Usuarios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-muted-foreground leading-relaxed">
                  Realizar pruebas de aceptación y usabilidad con usuarios reales. Recopilar retroalimentación y
                  utilizarla para mejorar el producto continuamente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary font-bold">Mejora Continua</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-muted-foreground leading-relaxed">
                  Analizar métricas de calidad, implementar acciones correctivas y preventivas, y refinar constantemente
                  los procesos de desarrollo y aseguramiento de calidad.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
