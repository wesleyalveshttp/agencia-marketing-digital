"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  // Adicionar funções no início do componente
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-purple-50 via-white to-pink-50 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-medium text-purple-700">
                <TrendingUp className="w-4 h-4 mr-2" />
                #1 Agência de Marketing Digital
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Marketing Digital que{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Transforma
                </span>{" "}
                Negócios
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Impulsione sua marca com estratégias comprovadas de marketing digital. Mais leads, mais vendas, mais
                crescimento para sua empresa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4"
                onClick={scrollToContact}
              >
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                onClick={scrollToPortfolio}
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Cases
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-gray-600">Clientes Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">98%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">5 Anos</div>
                <div className="text-sm text-gray-600">Experiência</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                alt="Marketing Digital - Gráficos e Analytics"
                width={500}
                height={600}
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
