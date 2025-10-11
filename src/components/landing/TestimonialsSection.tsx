import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    rating: 5,
    text: 'Rezume Expert помог мне создать идеальное резюме за считанные минуты. AI-ассистент дал отличные советы по улучшению текста. Получил 3 приглашения на собеседования в первую неделю!',
    name: 'Иван Петров',
    role: 'Frontend Developer',
    avatar: 'IP'
  },
  {
    rating: 5,
    text: 'Профессиональные шаблоны и умное редактирование сэкономили мне массу времени. Резюме выглядит стильно и современно. Рекомендую всем, кто ищет работу!',
    name: 'Анна Смирнова',
    role: 'UX/UI Designer',
    avatar: 'АС'
  },
  {
    rating: 5,
    text: 'Отличный сервис! AI действительно помогает улучшить формулировки и структуру резюме. Экспорт в PDF работает безупречно. Очень доволен результатом.',
    name: 'Михаил Козлов',
    role: 'Product Manager',
    avatar: 'МК'
  },
  {
    rating: 5,
    text: 'Использовал множество сервисов для создания резюме, но Rezume Expert - лучший! Интуитивный интерфейс и мощный AI-ассистент делают процесс быстрым и приятным.',
    name: 'Екатерина Волкова',
    role: 'Marketing Specialist',
    avatar: 'ЕВ'
  },
  {
    rating: 5,
    text: 'Шаблоны действительно ATS-friendly, резюме прошло через все автоматические системы без проблем. AI помог оптимизировать ключевые слова. Спасибо за отличный продукт!',
    name: 'Дмитрий Соколов',
    role: 'Data Scientist',
    avatar: 'ДС'
  },
  {
    rating: 5,
    text: 'Впечатляющая платформа! За 30 минут создала резюме, которое выглядит как работа профессионального дизайнера. AI-советы по содержанию очень полезные.',
    name: 'Ольга Морозова',
    role: 'HR Manager',
    avatar: 'ОМ'
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Что говорят наши пользователи
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xl font-semibold text-foreground">4.9/5</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-muted/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
