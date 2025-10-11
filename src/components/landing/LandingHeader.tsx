import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function LandingHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/10 backdrop-blur-lg border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-white" />
            <span className="text-xl font-bold text-white">
              Rezume Expert
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Возможности
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Как работает
            </a>
            <a href="#pricing" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Цены
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Link to="/auth">
              <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/10">
                Войти
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="sm" className="bg-white text-primary hover:bg-white/90">
                Создать резюме
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
