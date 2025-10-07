import { Bot, Edit3, Palette, Download } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI Ассистент',
    description: 'Искусственный интеллект поможет создать профессиональное резюме и предложит улучшения',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Edit3,
    title: 'Умное редактирование',
    description: 'Автоматические предложения по улучшению текста, грамматики и структуры',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Palette,
    title: 'Шаблоны дизайна',
    description: 'Множество профессиональных шаблонов, одобренных HR-специалистами',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Download,
    title: 'Экспорт в PDF',
    description: 'Скачивайте резюме в различных форматах и делитесь онлайн',
    gradient: 'from-green-500 to-emerald-500'
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Возможности платформы
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Всё что нужно для создания профессионального резюме
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-full h-full text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
