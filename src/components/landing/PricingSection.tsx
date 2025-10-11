import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '0₽',
    period: 'месяц',
    description: 'Для начинающих',
    features: [
      '3 резюме',
      'Базовые шаблоны',
      'PDF экспорт',
      'Email поддержка'
    ],
    cta: 'Начать бесплатно',
    popular: false,
    variant: 'outline'
  },
  {
    name: 'Pro',
    price: '990₽',
    period: 'месяц',
    description: 'Для профессионалов',
    features: [
      'Безлимит резюме',
      'Все премиум шаблоны',
      'AI улучшения',
      'Приоритетная поддержка',
      'Аналитика просмотров',
      'Кастомные цвета и шрифты'
    ],
    cta: 'Выбрать Pro',
    popular: true,
    variant: 'solid'
  },
  {
    name: 'Enterprise',
    price: 'По запросу',
    period: '',
    description: 'Для компаний',
    features: [
      'API доступ',
      'Корпоративные шаблоны',
      'Брендинг компании',
      'Менеджер поддержки',
      'Обучение команды',
      'SLA 99.9%'
    ],
    cta: 'Связаться с нами',
    popular: false,
    variant: 'outline'
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-[hsl(250,70%,62%)] to-[hsl(280,60%,55%)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wLTE0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0xNCAwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Выберите свой план
          </h2>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 px-2 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <button className="px-6 py-2 bg-white text-[hsl(250,70%,62%)] rounded-full font-medium transition-all duration-200">
              Месяц
            </button>
            <button className="px-6 py-2 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-200">
              Год
            </button>
            <span className="px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold">
              -20%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 ${
                plan.popular 
                  ? 'md:scale-105 shadow-2xl ring-2 ring-white/50' 
                  : 'shadow-xl'
              } transition-all duration-300 hover:scale-105`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full text-sm font-bold shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    ПОПУЛЯРНОЕ
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8 space-y-2">
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="text-white/70 text-sm">{plan.description}</p>
                <div className="pt-4">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-white/70 ml-2">/ {plan.period}</span>
                  )}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-white/90">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 ${
                  plan.variant === 'solid'
                    ? 'bg-white text-[hsl(250,70%,62%)] hover:bg-white/95 shadow-lg'
                    : 'bg-white/10 text-white border-2 border-white/30 hover:bg-white/20'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-white/70 mt-12 text-sm">
          Все планы включают 14-дневную гарантию возврата денег
        </p>
      </div>
    </section>
  );
}
