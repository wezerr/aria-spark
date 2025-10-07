import { Sparkles, CheckCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[hsl(250,70%,62%)] to-[hsl(280,60%,55%)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMTRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTE0IDBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">AI-powered платформа</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Создайте идеальное резюме с помощью AI
            </h1>

            <p className="text-xl text-white/90 leading-relaxed max-w-xl">
              Современная платформа для создания и редактирования резюме с использованием искусственного интеллекта
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-[hsl(250,70%,62%)] rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/95">
                Создать резюме
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                Посмотреть примеры
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">10,000+ резюме создано</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">AI-powered</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">ATS-friendly</span>
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              {/* Floating Cards with Glassmorphism */}
              <div className="absolute top-0 right-0 w-72 h-96 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500"></div>
              <div className="absolute top-8 right-8 w-72 h-96 bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative w-72 h-96 bg-white/20 backdrop-blur-md rounded-2xl border border-white/40 shadow-2xl p-8 hover:scale-105 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white/30 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-white/40 rounded w-3/4"></div>
                    <div className="h-3 bg-white/30 rounded w-1/2"></div>
                  </div>
                  <div className="space-y-2 pt-4">
                    <div className="h-3 bg-white/30 rounded"></div>
                    <div className="h-3 bg-white/30 rounded w-5/6"></div>
                    <div className="h-3 bg-white/30 rounded w-4/6"></div>
                  </div>
                  <div className="space-y-2 pt-4">
                    <div className="h-3 bg-white/30 rounded"></div>
                    <div className="h-3 bg-white/30 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
