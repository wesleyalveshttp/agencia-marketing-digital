import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-commerce Fashion",
    category: "E-commerce",
    description: "Aumento de 300% nas vendas online através de campanhas integradas",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    results: ["+300% Vendas", "+150% Tráfego", "+80% Conversão"],
    tags: ["Google Ads", "Facebook Ads", "SEO"],
  },
  {
    title: "Startup Fintech",
    category: "Tecnologia",
    description: "Estratégia de lançamento que gerou 10k usuários em 30 dias",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    results: ["10k Usuários", "+250% Leads", "+90% Engajamento"],
    tags: ["LinkedIn Ads", "Content Marketing", "PR Digital"],
  },
  {
    title: "Clínica Médica",
    category: "Saúde",
    description: "Posicionamento digital que triplicou o número de consultas",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    results: ["+200% Consultas", "+180% Leads", "+95% ROI"],
    tags: ["Google Ads", "SEO Local", "Redes Sociais"],
  },
  {
    title: "Restaurante Gourmet",
    category: "Alimentação",
    description: "Campanha que aumentou delivery em 400% durante a pandemia",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    results: ["+400% Delivery", "+220% Seguidores", "+160% Engajamento"],
    tags: ["Instagram Ads", "Influencer Marketing", "Content Creation"],
  },
  {
    title: "Escola de Idiomas",
    category: "Educação",
    description: "Estratégia omnichannel que dobrou as matrículas",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    results: ["+100% Matrículas", "+180% Leads", "+75% Conversão"],
    tags: ["Google Ads", "Facebook Ads", "Email Marketing"],
  },
  {
    title: "Imobiliária Premium",
    category: "Imóveis",
    description: "Campanha que gerou R$ 50M em vendas em 6 meses",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    results: ["R$ 50M Vendas", "+300% Leads", "+120% Conversão"],
    tags: ["Google Ads", "Facebook Ads", "Landing Pages"],
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Nosso{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos nossos cases de sucesso e os resultados extraordinários que alcançamos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
                      >
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {result}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
