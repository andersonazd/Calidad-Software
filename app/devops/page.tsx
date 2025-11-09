import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GitBranch, Rocket, RefreshCw, Eye, Server } from "lucide-react"

export default function DevOpsPage() {
  const pipeline = [
    { step: "Build", icon: Server, description: "Compilación y construcción del código" },
    { step: "Test", icon: RefreshCw, description: "Ejecución de pruebas automatizadas" },
    { step: "Release", icon: GitBranch, description: "Preparación de versión para despliegue" },
    { step: "Deploy", icon: Rocket, description: "Despliegue a entornos de producción" },
    { step: "Monitor", icon: Eye, description: "Monitoreo continuo y métricas" },
  ]

  const practices = [
    {
      title: "Integración Continua (CI)",
      description:
        "Práctica de integrar cambios frecuentemente en un repositorio central con ejecución automática de pruebas.",
      benefits: ["Detección temprana de errores", "Código siempre en estado desplegable", "Feedback rápido al equipo"],
      tools: ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI"],
    },
    {
      title: "Entrega Continua (CD)",
      description: "Automatización de la entrega de cambios al entorno de producción o staging de manera confiable.",
      benefits: ["Despliegues más frecuentes", "Reducción de riesgos", "Tiempo de mercado más rápido"],
      tools: ["ArgoCD", "Spinnaker", "AWS CodeDeploy", "Azure DevOps"],
    },
    {
      title: "Testing Continuo",
      description: "Automatización de pruebas en cada commit, merge o despliegue para prevenir regresiones.",
      benefits: ["Calidad constante", "Detección inmediata de bugs", "Confianza en los cambios"],
      tools: ["Selenium Grid", "TestRail", "Cypress Dashboard", "BrowserStack"],
    },
  ]

  const qualityTools = [
    { name: "SonarQube", purpose: "Análisis de calidad de código y vulnerabilidades" },
    { name: "OWASP Dependency Check", purpose: "Escaneo de dependencias con vulnerabilidades" },
    { name: "ESLint/Prettier", purpose: "Linting y formateo automático" },
    { name: "Snyk", purpose: "Seguridad en código y contenedores" },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <section className="mb-16 text-center">
          <Badge className="mb-4 bg-primary text-primary-foreground font-bold">Automatización</Badge>
          <h1 className="text-5xl font-bold text-primary mb-6">DevOps y Automatización</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-semibold leading-relaxed">
            Metodología que combina desarrollo y operaciones para acortar el ciclo de vida del software, aumentar la
            frecuencia de entregas y mejorar la calidad mediante automatización.
          </p>
        </section>

        {/* Pipeline */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">Pipeline DevOps</h2>

          <p className="text-center text-muted-foreground mb-12 font-semibold max-w-2xl mx-auto leading-relaxed">
            Secuencia de pasos automatizados que mejora la trazabilidad, repetibilidad y confiabilidad del proceso de
            entrega.
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {pipeline.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg w-full md:w-48">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.step}</h3>
                    <p className="text-xs font-semibold text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
                {index < pipeline.length - 1 && <div className="hidden md:block text-primary text-2xl">→</div>}
              </div>
            ))}
          </div>
        </section>

        {/* Practices */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary mb-8">Prácticas Clave</h2>

          <div className="grid gap-8">
            {practices.map((practice, index) => (
              <Card key={index} className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary font-bold">{practice.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg font-semibold text-muted-foreground leading-relaxed">{practice.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-secondary rounded-lg p-6">
                      <h4 className="font-bold text-primary mb-3 text-lg">Beneficios</h4>
                      <ul className="space-y-2">
                        {practice.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 font-semibold text-foreground">
                            <span className="text-primary mt-1">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-secondary rounded-lg p-6">
                      <h4 className="font-bold text-primary mb-3 text-lg">Herramientas</h4>
                      <div className="flex flex-wrap gap-2">
                        {practice.tools.map((tool, i) => (
                          <Badge key={i} variant="outline" className="font-semibold border-primary text-primary">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quality in DevOps */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary mb-8">Calidad en Entornos Automatizados</h2>

          <div className="bg-secondary rounded-2xl p-8 mb-8">
            <p className="text-lg font-semibold text-muted-foreground leading-relaxed mb-6">
              La automatización DevOps permite integrar verificaciones de calidad en cada etapa del pipeline, asegurando
              que solo código de alta calidad llegue a producción.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {qualityTools.map((tool, index) => (
              <Card
                key={index}
                className="border-2 border-primary/20 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-primary font-bold">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-muted-foreground leading-relaxed">{tool.purpose}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Example */}
        <section>
          <div className="bg-primary/10 border-2 border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">🚀 Caso de Éxito</h3>
            <p className="font-semibold text-muted-foreground leading-relaxed mb-4">
              <span className="text-primary font-bold">Empresa:</span> Startup de fintech implementa pipeline DevOps
              completo
            </p>

            <div className="space-y-3 font-semibold text-muted-foreground">
              <p>
                <span className="text-primary font-bold">Antes:</span> Despliegues manuales cada 2 semanas, 3-4 horas de
                downtime, múltiples errores en producción
              </p>

              <p>
                <span className="text-primary font-bold">Implementación:</span>
              </p>
              <ul className="ml-6 space-y-2">
                <li>• CI/CD con GitHub Actions y AWS CodeDeploy</li>
                <li>• Testing automatizado con cobertura del 85%</li>
                <li>• Análisis de código con SonarQube en cada PR</li>
                <li>• Monitoreo con Datadog y alertas automáticas</li>
              </ul>

              <p>
                <span className="text-primary font-bold">Después:</span> Despliegues múltiples veces al día, cero
                downtime, reducción del 90% en bugs en producción, tiempo de respuesta a incidentes de 2 horas a 15
                minutos
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
