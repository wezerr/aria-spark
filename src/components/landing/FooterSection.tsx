import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const footerLinks = {
  product: [
    { label: 'Возможности', href: '#features' },
    { label: 'Шаблоны', href: '#templates' },
    { label: 'Цены', href: '#pricing' },
    { label: 'Примеры', href: '#examples' }
  ],
  resources: [
    { label: 'Блог', href: '#blog' },
    { label: 'Руководства', href: '#guides' },
    { label: 'FAQ', href: '#faq' },
    { label: 'API документация', href: '#api' }
  ],
  company: [
    { label: 'О нас', href: '#about' },
    { label: 'Контакты', href: '#contact' },
    { label: 'Вакансии', href: '#careers' },
    { label: 'Пресс-кит', href: '#press' }
  ]
};

export function FooterSection() {
  return (
    <footer className="bg-[hsl(220,30%,12%)] text-white">
      {/* Final CTA Section */}
      <div className="relative py-20 bg-gradient-to-r from-[hsl(250,70%,62%)] to-[hsl(280,60%,55%)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMTRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTE0IDBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Готовы создать идеальное резюме?
          </h2>
          <p className="text-xl text-white/90">
            Присоединяйтесь к тысячам успешных профессионалов
          </p>
          <div className="space-y-3">
            <button className="px-10 py-5 bg-white text-[hsl(250,70%,62%)] rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              Создать резюме бесплатно
            </button>
            <p className="text-sm text-white/70">
              Не требуется кредитная карта
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Logo & Description */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Resume AI
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Создавайте профессиональные резюме с помощью искусственного интеллекта
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Product */}
          <div>
            <h3 className="font-semibold text-white mb-4">Продукт</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Ресурсы</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Компания</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2025 Resume AI. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <select className="bg-white/10 border border-white/20 rounded px-3 py-1 text-sm text-white cursor-pointer">
                <option value="ru">Русский</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
