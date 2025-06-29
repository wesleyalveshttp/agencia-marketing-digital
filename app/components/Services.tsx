import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Share2, Target, BarChart3, Megaphone, Smartphone } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "SEO & SEM",
    description: "Otimização para mecanismos de busca e campanhas pagas no Google",
    features: ["Auditoria SEO", "Google Ads", "Palavras-chave", "Link Building"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Share2,
    title: "Redes Sociais",
    description: "Gestão completa das suas redes sociais com conteúdo estratégico",
    features: ["Criação de Conteúdo", "Gestão de Perfis", "Campanhas Pagas", "Relatórios"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Target,
    title: "Tráfego Pago",
    description: "Campanhas otimizadas para máximo ROI em todas as plataformas",
    features: ["Facebook Ads", "Instagram Ads", "Google Ads", "LinkedIn Ads"],
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & BI",
    description: "Análise de dados e inteligência de negócios para decisões assertivas",
    features: ["Google Analytics", "Dashboards", "Relatórios", "KPIs"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Megaphone,
    title: "Branding Digital",
    description: "Construção e fortalecimento da sua marca no ambiente digital",
    features: ["Identidade Visual", "Posicionamento", "Storytelling", "Reputação"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Smartphone,
    title: "Marketing Mobile",
    description: "Estratégias focadas em dispositivos móveis e aplicativos",
    features: ["App Marketing", "Push Notifications", "SMS Marketing", "Mobile Ads"],
    color: "from-indigo-500 to-blue-500",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Nossos{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas de marketing digital para impulsionar seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
