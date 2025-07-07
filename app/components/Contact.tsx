"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Construir mensagem para WhatsApp
    const whatsappMessage = `
🚀 *Nova Solicitação de Consultoria - AgênciaMax*

👤 *Nome:* ${formData.name}
📧 *E-mail:* ${formData.email}
📱 *Telefone:* ${formData.phone}
🏢 *Empresa:* ${formData.company || "Não informado"}
🎯 *Serviço de Interesse:* ${formData.service || "Não especificado"}

💬 *Mensagem:*
${formData.message || "Nenhuma mensagem adicional"}

---
Enviado através do site da AgênciaMax
    `.trim()

    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage)

    // Redirecionar para WhatsApp
    const whatsappURL = `https://wa.me/5583999054590?text=${encodedMessage}`
    window.open(whatsappURL, "_blank")

    // Limpar formulário
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Entre em{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto para começar? Fale conosco e descubra como podemos transformar seu negócio
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Solicite sua Consultoria Gratuita</CardTitle>
                <p className="text-gray-600">Preencha o formulário e será redirecionado para o WhatsApp</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Serviço de Interesse</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="SEO & SEM">SEO & SEM</option>
                      <option value="Redes Sociais">Redes Sociais</option>
                      <option value="Tráfego Pago">Tráfego Pago</option>
                      <option value="Analytics & BI">Analytics & BI</option>
                      <option value="Branding Digital">Branding Digital</option>
                      <option value="Marketing Mobile">Marketing Mobile</option>
                      <option value="Todos os Serviços">Todos os Serviços</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full"
                      placeholder="Conte-nos mais sobre seu projeto e objetivos..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-4"
                  >
                    Enviar via WhatsApp
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="shadow-xl border-0">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Endereço</h3>
                      <p className="text-gray-600">
                        Av. Paulista, 1000
                        <br />
                        São Paulo, SP - 01310-100
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Telefone</h3>
                      <p className="text-gray-600">(83) 99905-4590</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">E-mail</h3>
                      <p className="text-gray-600">agenciamax36@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Horário</h3>
                      <p className="text-gray-600">
                        Segunda à Sexta: 8h às 18h
                        <br />
                        Sábado: 9h às 13h
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Atendimento Urgente?</h3>
                <p className="mb-4 opacity-90">Para emergências e projetos urgentes, entre em contato via WhatsApp</p>
                <Button
                  className="bg-white text-purple-600 hover:bg-gray-100 w-full"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5583999054590?text=Olá! Gostaria de saber mais sobre os serviços da AgênciaMax.",
                      "_blank",
                    )
                  }
                >
                  WhatsApp: (83) 99905-4590
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
