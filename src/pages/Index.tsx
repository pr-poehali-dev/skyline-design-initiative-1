import { Compass, Lock, Sparkles, ShieldCheck, Wallet, Leaf, Plus, Minus, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Насколько физически сложны туры на Дальний Восток?",
      answer:
        "Уровень нагрузки зависит от выбранного направления. Камчатка требует хорошей физической формы — вулканические маршруты предполагают треккинг до 15 км в день. Байкал и Владивосток подходят для широкого круга туристов. Перед бронированием менеджер подберёт маршрут под вашу подготовку.",
    },
    {
      question: "Что входит в стоимость тура?",
      answer:
        "В стоимость включены: трансфер по маршруту, размещение (гостиницы или глэмпинг), питание, услуги гида, все разрешения на посещение заповедников и базовая страховка. Авиаперелёт до точки старта оплачивается отдельно — мы помогаем с выбором рейсов.",
    },
    {
      question: "Когда лучше ехать на Камчатку, Байкал или Владивосток?",
      answer:
        "Камчатка — июль–сентябрь (вулканы, гейзеры, рыбалка). Байкал прекрасен летом (июнь–август) и зимой (февраль–март) — лёд и торосы. Владивосток хорош круглый год, особенно весна и осень. Для каждого направления у нас есть сезонные программы.",
    },
    {
      question: "Как забронировать тур?",
      answer:
        "Оставьте заявку через форму ниже или напишите нам — менеджер свяжется в течение рабочего дня, расскажет о доступных датах и поможет выбрать маршрут. Для бронирования потребуется предоплата 30%, остаток — за 14 дней до выезда.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/d227fc7a-490d-499f-b97b-f1c9fa4a596d/files/49318bc7-1a20-4edd-b24d-1b24faf3a97a.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Compass className="w-5 h-5" />
            <span className="font-medium text-balance">Дальний Восток</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Направления", "Безопасность", "Маршруты", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
            >
              Войти
            </a>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Забронировать</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Камчатка · Байкал · Владивосток</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Дикий Дальний Восток.</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Вулканы Камчатки, кристальный лёд Байкала, тихоокеанские закаты Владивостока — путешествия, которые меняют взгляд на мир. Экспертные туры с опытными гидами.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Выбрать тур
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Смотреть маршруты
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Lock className="w-4 h-4" />
            <span className="text-sm font-medium">Безопасность и комфорт — наш приоритет</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Expert Guides */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Опытные гиды</h3>
              <p className="text-white/80 leading-relaxed">Местные эксперты с глубоким знанием региона и природы.</p>
            </div>

            {/* Safety */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Полная безопасность</h3>
              <p className="text-white/80 leading-relaxed">Страховка, профессиональное снаряжение и постоянная связь.</p>
            </div>

            {/* All-Inclusive */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Всё включено</h3>
              <p className="text-white/80 leading-relaxed">Трансфер, размещение, питание, разрешения и гид.</p>
            </div>

            {/* Eco */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Эко-туризм</h3>
              <p className="text-white/80 leading-relaxed">Бережное отношение к природе заповедников и экосистем.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Ваш маршрут</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                От первого звонка до незабываемых впечатлений — вот как проходит каждое путешествие.
              </p>
            </div>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Phase 1 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Подбор тура</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Менеджер изучает ваши интересы, физическую подготовку и бюджет — и подбирает идеальный маршрут на Камчатку, Байкал или Владивосток.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Подготовка</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Мы берём на себя организацию: трансфер, размещение, разрешения в заповедники. Вам остаётся только собрать чемодан.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Путешествие</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Вулканы и гейзеры, байкальский лёд, тихоокеанские виды — опытный гид открывает регион с неожиданных сторон.
                  </p>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Воспоминания</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Возвращаетесь домой с фотографиями, впечатлениями и желанием вернуться. Многие наши клиенты едут к нам снова.
                  </p>
                </div>
              </div>
            </div>

            {/* Check Availability Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Узнать доступные даты
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать перед поездкой на Дальний Восток: от выбора направления до деталей бронирования.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Свяжитесь с нами</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Интересующее направление
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Камчатка, Байкал или Владивосток? Расскажите о ваших пожеланиях..."
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Отправить заявку
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Готовы помочь с выбором маршрута и ответить на все вопросы. Свяжитесь с нами — менеджер ответит в течение одного рабочего дня.
                  </p>
                </div>

                {/* Profile Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                      alt="Алексей Морозов"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">Алексей Морозов</h4>
                      <p className="text-gray-600">Руководитель туров</p>
                    </div>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Написать напрямую
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 text-center">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-sm text-white/70">туристов в год</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 text-center">
                    <div className="text-3xl font-bold mb-2">3</div>
                    <div className="text-sm text-white/70">региона</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 text-center">
                    <div className="text-3xl font-bold mb-2">8 лет</div>
                    <div className="text-sm text-white/70">на рынке</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left - Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Compass className="w-6 h-6" />
                <span className="text-xl font-semibold">Дальний Восток</span>
              </div>
              <p className="text-white/60 leading-relaxed max-w-md">
                Туры на Камчатку, Байкал и Владивосток. Уникальная природа, опытные гиды, незабываемые впечатления.
              </p>
            </div>

            {/* Right - Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Подпишитесь на новости</h3>
              <p className="text-white/60 mb-4">Новые маршруты, специальные предложения и советы путешественника.</p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-3 rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">
                  Подписаться
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
            <p className="text-white/40 text-sm">© 2024 Дальний Восток. Все права защищены.</p>
            <div className="flex gap-6">
              {["Политика конфиденциальности", "Договор оферты"].map((link) => (
                <a key={link} href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
