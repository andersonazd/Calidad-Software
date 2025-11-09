import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TestTube2, Box, Search, Gauge } from "lucide-react"

export default function PruebasPage() {
  const testTypes = [
    {
      category: "Pruebas Funcionales",
      icon: TestTube2,
      types: [
        { name: "Pruebas Unitarias", description: "Validan componentes individuales del código" },
        { name: "Pruebas de Integración", description: "Verifican la interacción entre módulos" },
        { name: "Pruebas de Sistema", description: "Evalúan el sistema completo end-to-end" },
        { name: "Pruebas de Aceptación", description: "Confirman que cumple requisitos del usuario" },
      ],
    },
    {
      category: "Pruebas No Funcionales",
      icon: Gauge,
      types: [
        { name: "Pruebas de Rendimiento", description: "Miden velocidad y capacidad de respuesta" },
        { name: "Pruebas de Carga", description: "Evalúan comportamiento bajo alta demanda" },
        { name: "Pruebas de Seguridad", description: "Detectan vulnerabilidades y brechas" },
        { name: "Pruebas de Usabilidad", description: "Verifican experiencia del usuario" },
      ],
    },
  ]

  const techniques = [
    {
      name: "Caja Negra",
      icon: Box,
      description: "Se prueba la funcionalidad sin conocer el código interno",
      example: "Ingresar datos en un formulario y verificar el resultado esperado",
    },
    {
      name: "Caja Blanca",
      icon: Search,
      description: "Se evalúa el flujo interno y la estructura del código",
      example: "Verificar que todas las ramas de un condicional sean ejecutadas",
    },
    {
      name: "Test Driven Development (TDD)",
      icon: TestTube2,
      description: "Escribir pruebas antes de implementar la funcionalidad",
      example: "Red → Green → Refactor: escribir test fallido, hacerlo pasar, mejorar código",
    },
  ]

  const tools = [
    { name: "Selenium", use: "Automatización de pruebas web funcionales" },
    { name: "JUnit", use: "Testing unitario en Java" },
    { name: "Postman", use: "Pruebas de APIs REST" },
    { name: "Cypress", use: "Testing moderno para aplicaciones web" },
    { name: "Jest", use: "Framework de testing para JavaScript" },
    { name: "pytest", use: "Framework de testing para Python" },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <section className="mb-16 text-center">
          <Badge className="mb-4 bg-primary text-primary-foreground font-bold">Testing & QA</Badge>
          <h1 className="text-5xl font-bold text-primary mb-6">Pruebas de Software</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-semibold leading-relaxed">
            Conjunto de actividades diseñadas para identificar errores, verificar el cumplimiento de requisitos y
            asegurar la calidad de una aplicación antes de su liberación.
          </p>
        </section>

        {/* Test Cycle */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary mb-8">Ciclo de Vida del Testing</h2>

          <div className="grid md:grid-cols-4 gap-4">
            <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-2 font-bold text-lg">
                  1
                </div>
                <CardTitle className="text-xl text-primary font-bold">Planificación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold text-muted-foreground leading-relaxed">
                  Definición de estrategia, alcance y recursos necesarios
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-2 font-bold text-lg">
                  2
                </div>
                <CardTitle className="text-xl text-primary font-bold">Diseño</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold text-muted-foreground leading-relaxed">
                  Elaboración de casos de prueba, datos y condiciones
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-2 font-bold text-lg">
                  3
                </div>
                <CardTitle className="text-xl text-primary font-bold">Ejecución</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold text-muted-foreground leading-relaxed">
                  Validación del comportamiento del sistema contra casos definidos
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-2 font-bold text-lg">
                  4
                </div>
                <CardTitle className="text-xl text-primary font-bold">Cierre</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold text-muted-foreground leading-relaxed">
                  Documentación de resultados, métricas y lecciones aprendidas
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Types of Tests */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary mb-8">Tipos de Pruebas</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testTypes.map((category, index) => (
              <Card key={index} className="border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl text-primary font-bold">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.types.map((type, i) => (
                      <div key={i} className="bg-secondary rounded-lg p-4">
                        <h4 className="font-bold text-primary mb-2">{type.name}</h4>
                        <p className="text-sm font-semibold text-muted-foreground leading-relaxed">
                          {type.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Techniques */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary mb-8">Técnicas de Testing</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {techniques.map((technique, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <technique.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary font-bold">{technique.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="font-semibold text-muted-foreground leading-relaxed">{technique.description}</p>
                  <div className="bg-secondary rounded-lg p-3">
                    <p className="text-sm font-semibold text-foreground">
                      <span className="text-primary">💡</span> {technique.example}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section>
          <h2 className="text-4xl font-bold text-primary mb-8">Herramientas de Testing</h2>

          <div className="grid md:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg text-primary font-bold">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-muted-foreground">{tool.use}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-primary/10 border-2 border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">🎯 Ejemplo Práctico</h3>
            <p className="font-semibold text-muted-foreground leading-relaxed mb-4">
              <span className="text-primary font-bold">Escenario:</span> Una empresa de e-commerce implementa testing
              automatizado para su flujo de compra:
            </p>
            <ul className="space-y-2 font-semibold text-muted-foreground">
              <li>
                <span className="text-primary">•</span> <strong>Pruebas unitarias (Jest):</strong> Validan lógica de
                cálculo de precios y descuentos
              </li>
              <li>
                <span className="text-primary">•</span> <strong>Pruebas de integración (Postman):</strong> Verifican
                APIs de pago y envío
              </li>
              <li>
                <span className="text-primary">•</span> <strong>Pruebas E2E (Cypress):</strong> Simulan el recorrido
                completo del usuario desde búsqueda hasta pago
              </li>
              <li>
                <span className="text-primary">•</span> <strong>Resultado:</strong> 95% de cobertura de código y
                detección temprana de bugs antes de producción
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
