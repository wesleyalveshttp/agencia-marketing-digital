"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const benefits = [
  "Consultoria gratuita de 30 minutos",
  "Análise completa do seu negócio",
  "Proposta personalizada",
  "Sem compromisso inicial",
]

export default function CTA() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handlePhoneCall = () => {
    window.open("tel:+5583999054590", "_self")
  }

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para Transformar seu Negócio?</h2>
          <p className="text-xl mb-8 opacity-90">
            Não perca mais tempo! Comece hoje mesmo a jornada que vai levar sua empresa ao próximo nível digital.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Consultoria Gratuita</h3>
              <ul className="space-y-3 text-left">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 text-green-300" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Resultados Garantidos</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">30 dias</div>
                  <div className="text-sm opacity-80">Para ver os primeiros resultados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">90 dias</div>
                  <div className="text-sm opacity-80">Para transformação completa</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-12 py-4 font-semibold"
              onClick={scrollToContact}
            >
              Quero Minha Consultoria Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm opacity-80">
              Ou ligue agora:
              <button onClick={handlePhoneCall} className="font-semibold hover:underline ml-1">
                (83) 99905-4590
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
