import { ArrowRight } from 'lucide-react';

const templates = [
  { name: 'Классическое', tag: 'ATS-friendly', popular: false },
  { name: 'Современное', tag: 'Популярное', popular: true },
  { name: 'Креативное', tag: 'Новое', popular: false },
  { name: 'Минималист', tag: 'ATS-friendly', popular: false },
  { name: 'Профессиональное', tag: 'Популярное', popular: true },
  { name: 'Технологичное', tag: 'Новое', popular: false }
];

export function TemplatesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wLTE0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0xNCAwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Профессиональные шаблоны
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Выберите дизайн, который подходит вашей профессии
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Template Card */}
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
                {/* Tag */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    template.popular 
                      ? 'bg-yellow-400 text-yellow-900' 
                      : 'bg-white/20 backdrop-blur-sm text-white border border-white/30'
                  }`}>
                    {template.tag}
                  </span>
                </div>

                {/* Template Preview */}
                <div className="aspect-[3/4] bg-white/5 p-6 relative">
                  {/* Simulated Resume Content */}
                  <div className="space-y-4">
                    <div className="h-12 w-12 bg-white/20 rounded-full"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-white/30 rounded w-3/4"></div>
                      <div className="h-2 bg-white/20 rounded w-1/2"></div>
                    </div>
                    <div className="space-y-2 pt-4">
                      <div className="h-2 bg-white/20 rounded"></div>
                      <div className="h-2 bg-white/20 rounded w-5/6"></div>
                      <div className="h-2 bg-white/20 rounded w-4/6"></div>
                    </div>
                    <div className="space-y-2 pt-4">
                      <div className="h-2 bg-white/20 rounded"></div>
                      <div className="h-2 bg-white/20 rounded w-5/6"></div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-6 py-3 bg-white text-primary rounded-lg font-semibold flex items-center gap-2 transform scale-95 group-hover:scale-100 transition-transform duration-300">
                      Использовать шаблон
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Template Name */}
                <div className="p-4 bg-white/5 backdrop-blur-sm border-t border-white/10">
                  <h3 className="text-white font-semibold text-center">{template.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
