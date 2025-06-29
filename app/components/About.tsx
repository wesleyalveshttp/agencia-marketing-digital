import { CheckCircle, Users, Trophy, Target } from "lucide-react"
import Image from "next/image"

const achievements = [
  { icon: Users, number: "500+", label: "Clientes Satisfeitos" },
  { icon: Trophy, number: "50+", label: "Prêmios Conquistados" },
  { icon: Target, number: "98%", label: "Taxa de Sucesso" },
]

const benefits = [
  "Equipe especializada e certificada",
  "Estratégias personalizadas para cada negócio",
  "Relatórios detalhados e transparentes",
  "Suporte dedicado 24/7",
  "Resultados mensuráveis e comprovados",
  "Tecnologia de ponta e ferramentas premium",
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">
                Sobre a{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  AgênciaMax
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Somos uma agência de marketing digital apaixonada por transformar negócios através de estratégias
                inovadoras e resultados excepcionais. Com mais de 5 anos de experiência, ajudamos empresas de todos os
                tamanhos a alcançarem seus objetivos digitais.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa missão é ser o parceiro estratégico que sua empresa precisa para crescer no ambiente digital,
                oferecendo soluções personalizadas e focadas em ROI.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{achievement.number}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Por que escolher a AgênciaMax?</h3>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Equipe AgênciaMax em reunião estratégica"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
