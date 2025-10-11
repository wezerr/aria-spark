import { UserCircle, Sparkles, Download } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: UserCircle,
    title: 'Заполните информацию',
    description: 'Введите базовые данные: опыт работы, образование, навыки'
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'AI улучшает контент',
    description: 'Искусственный интеллект анализирует и улучшает ваше резюме'
  },
  {
    number: '03',
    icon: Download,
    title: 'Скачайте и используйте',
    description: 'Выберите шаблон, скачайте PDF или поделитесь ссылкой'
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Как это работает
          </h2>
          <p className="text-xl text-muted-foreground">
            Создайте резюме за 3 простых шага
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(250,70%,62%)] via-purple-400 to-[hsl(280,60%,55%)]" style={{ top: '120px', left: '16%', right: '16%' }}></div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card */}
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-2xl transition-all duration-300 relative z-10">
                  {/* Number Badge */}
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[hsl(250,70%,62%)] to-[hsl(280,60%,55%)] flex items-center justify-center shadow-xl">
                    <span className="text-3xl font-bold text-white">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-xl bg-muted/50 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-[hsl(250,70%,62%)]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-foreground text-center mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
