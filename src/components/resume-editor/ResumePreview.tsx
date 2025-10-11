import { Download, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface ResumePreviewProps {
  data: any;
  template: string;
  layout?: string;
  colors?: {
    background: string;
    text: string;
    heading: string;
    accent: string;
  };
  fullScreen?: boolean;
}

const ResumePreview = ({ 
  data, 
  template, 
  layout = "classic",
  colors = {
    background: "#ffffff",
    text: "#000000",
    heading: "#1f2937",
    accent: "#3b82f6"
  },
  fullScreen = false 
}: ResumePreviewProps) => {
  const [zoom, setZoom] = useState(100);

  const renderClassicLayout = () => (
    <div className="p-8" style={{ backgroundColor: colors.background, color: colors.text, width: '210mm', minHeight: '297mm' }}>
      {/* Header with photo centered */}
      <div className="text-center mb-6 pb-6 border-b">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2" style={{ color: colors.heading }}>Иван Иванов</h1>
        <p className="text-lg mb-2" style={{ color: colors.accent }}>Senior Frontend Developer</p>
        <div className="flex justify-center gap-4 text-sm">
          <span>ivan@example.com</span>
          <span>•</span>
          <span>+7 (999) 123-45-67</span>
          <span>•</span>
          <span>Москва</span>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2" style={{ color: colors.heading }}>Профессиональное резюме</h2>
        <p className="text-sm">
          Опытный фронтенд-разработчик с 5+ годами опыта в создании современных веб-приложений.
          Специализируюсь на React, TypeScript и создании масштабируемых архитектур.
        </p>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3" style={{ color: colors.heading }}>Опыт работы</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-semibold">Senior Frontend Developer</h3>
                <p className="text-sm opacity-70">Tech Corp</p>
              </div>
              <span className="text-sm opacity-70">2022 - Настоящее время</span>
            </div>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Увеличил производительность приложения на 40%</li>
              <li>• Внедрил CI/CD pipeline</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3" style={{ color: colors.heading }}>Образование</h2>
        <div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">МГУ им. М.В. Ломоносова</h3>
              <p className="text-sm opacity-70">Магистр · Информатика</p>
            </div>
            <span className="text-sm opacity-70">2018 - 2020</span>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3" style={{ color: colors.heading }}>Навыки</h2>
        <div className="flex flex-wrap gap-2">
          {["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full text-sm"
              style={{ backgroundColor: `${colors.accent}20`, color: colors.accent }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div>
        <h2 className="text-lg font-semibold mb-3" style={{ color: colors.heading }}>Языки</h2>
        <div className="flex gap-4 text-sm">
          <span>Русский (Native)</span>
          <span>Английский (Fluent)</span>
        </div>
      </div>
    </div>
  );

  const renderModernLayout = () => {
    const accentBg = colors.accent + '15';
    return (
    <div className="flex" style={{ backgroundColor: colors.background, color: colors.text, width: '210mm', minHeight: '297mm' }}>
      {/* Left sidebar with photo */}
      <div className="w-1/3 p-6 bg-primary/5"  style={{ borderRight: `1px solid ${colors.accent}20` }}>
        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2" style={{ color: colors.heading }}>Контакты</h3>
          <div className="text-sm space-y-1">
            <p>ivan@example.com</p>
            <p>+7 (999) 123-45-67</p>
            <p>Москва</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2" style={{ color: colors.heading }}>Навыки</h3>
          <div className="space-y-2">
            {["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL"].map((skill) => (
              <div key={skill} className="text-sm">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2" style={{ color: colors.heading }}>Языки</h3>
          <div className="text-sm space-y-1">
            <p>Русский (Native)</p>
            <p>Английский (Fluent)</p>
          </div>
        </div>
      </div>

      {/* Right content */}
      <div className="flex-1 p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2" style={{ color: colors.heading }}>Иван Иванов</h1>
          <p className="text-lg mb-2" style={{ color: colors.accent }}>Senior Frontend Developer</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2" style={{ color: colors.heading }}>О себе</h2>
          <p className="text-sm">
            Опытный фронтенд-разработчик с 5+ годами опыта в создании современных веб-приложений.
            Специализируюсь на React, TypeScript и создании масштабируемых архитектур.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3" style={{ color: colors.heading }}>Опыт работы</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-semibold">Senior Frontend Developer</h3>
                  <p className="text-sm opacity-70">Tech Corp</p>
                </div>
                <span className="text-sm opacity-70">2022 - Настоящее время</span>
              </div>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Увеличил производительность приложения на 40%</li>
                <li>• Внедрил CI/CD pipeline</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3" style={{ color: colors.heading }}>Образование</h2>
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">МГУ им. М.В. Ломоносова</h3>
                <p className="text-sm opacity-70">Магистр · Информатика</p>
              </div>
              <span className="text-sm opacity-70">2018 - 2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };

  const renderMinimalLayout = () => (
    <div className="p-8" style={{ backgroundColor: colors.background, color: colors.text, width: '210mm', minHeight: '297mm' }}>
      {/* Compact header without photo */}
      <div className="mb-6 pb-4 border-b">
        <h1 className="text-2xl font-bold mb-1" style={{ color: colors.heading }}>Иван Иванов</h1>
        <p className="text-sm mb-2" style={{ color: colors.accent }}>Senior Frontend Developer</p>
        <div className="flex gap-3 text-xs">
          <span>ivan@example.com</span>
          <span>•</span>
          <span>+7 (999) 123-45-67</span>
          <span>•</span>
          <span>Москва</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-base font-semibold mb-2" style={{ color: colors.heading }}>Опыт работы</h2>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-sm">Senior Frontend Developer · Tech Corp</h3>
                  <span className="text-xs opacity-70">2022 - Настоящее время</span>
                </div>
              </div>
              <ul className="text-xs space-y-0.5 ml-3 mt-1">
                <li>• Увеличил производительность приложения на 40%</li>
                <li>• Внедрил CI/CD pipeline</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-base font-semibold mb-2" style={{ color: colors.heading }}>Образование</h2>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-sm">МГУ им. М.В. Ломоносова</h3>
              <p className="text-xs opacity-70">Магистр · Информатика</p>
            </div>
            <span className="text-xs opacity-70">2018 - 2020</span>
          </div>
        </div>

        <div>
          <h2 className="text-base font-semibold mb-2" style={{ color: colors.heading }}>Навыки</h2>
          <div className="flex flex-wrap gap-1.5">
            {["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL"].map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 rounded text-xs"
                style={{ backgroundColor: `${colors.accent}20`, color: colors.accent }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-base font-semibold mb-2" style={{ color: colors.heading }}>Языки</h2>
          <div className="flex gap-3 text-xs">
            <span>Русский (Native)</span>
            <span>Английский (Fluent)</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSidebarLayout = () => {
    return (
    <div className="flex" style={{ backgroundColor: colors.background, color: colors.text, width: '210mm', minHeight: '297mm' }}>
      {/* Main content on left */}
      <div className="flex-1 p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2" style={{ color: colors.heading }}>Иван Иванов</h1>
          <p className="text-lg mb-2" style={{ color: colors.accent }}>Senior Frontend Developer</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2" style={{ color: colors.heading }}>Профессиональное резюме</h2>
          <p className="text-sm">
            Опытный фронтенд-разработчик с 5+ годами опыта в создании современных веб-приложений.
            Специализируюсь на React, TypeScript и создании масштабируемых архитектур.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3" style={{ color: colors.heading }}>Опыт работы</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-semibold">Senior Frontend Developer</h3>
                  <p className="text-sm opacity-70">Tech Corp</p>
                </div>
                <span className="text-sm opacity-70">2022 - Настоящее время</span>
              </div>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Увеличил производительность приложения на 40%</li>
                <li>• Внедрил CI/CD pipeline</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3" style={{ color: colors.heading }}>Образование</h2>
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">МГУ им. М.В. Ломоносова</h3>
                <p className="text-sm opacity-70">Магистр · Информатика</p>
              </div>
              <span className="text-sm opacity-70">2018 - 2020</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right sidebar with photo */}
      <div className="w-1/3 p-6 bg-primary/5" style={{ borderLeft: `1px solid ${colors.accent}20` }}>
        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2" style={{ color: colors.heading }}>Контакты</h3>
          <div className="text-sm space-y-1">
            <p>ivan@example.com</p>
            <p>+7 (999) 123-45-67</p>
            <p>Москва</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2" style={{ color: colors.heading }}>Навыки</h3>
          <div className="space-y-2">
            {["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL"].map((skill) => (
              <div key={skill} className="text-sm">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2" style={{ color: colors.heading }}>Языки</h3>
          <div className="text-sm space-y-1">
            <p>Русский (Native)</p>
            <p>Английский (Fluent)</p>
          </div>
        </div>
      </div>
    </div>
    );
  };

  const renderLayout = () => {
    switch (layout) {
      case "modern":
        return renderModernLayout();
      case "minimal":
        return renderMinimalLayout();
      case "sidebar":
        return renderSidebarLayout();
      default:
        return renderClassicLayout();
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Preview Header - только на десктопе */}
      <div className="hidden md:flex p-4 border-b items-center justify-between bg-background">
        <span className="text-sm font-medium">Предпросмотр</span>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setZoom(Math.max(50, zoom - 10))}
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
          <span className="text-sm text-muted-foreground min-w-[50px] text-center">
            {zoom}%
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setZoom(Math.min(150, zoom + 10))}
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Preview Content */}
      <div className="flex-1 overflow-auto bg-muted/30 flex items-start justify-center" style={{ padding: fullScreen && window.innerWidth < 1024 ? '8px' : '2rem' }}>
        <Card
          className="shadow-2xl overflow-visible"
          style={{
            width: "210mm",
            minHeight: "297mm",
            transform: fullScreen && window.innerWidth < 1024 
              ? `scale(${(window.innerWidth - 16) / 793})` 
              : `scale(${zoom / 100})`,
            transformOrigin: "top center",
            marginBottom: "1rem"
          }}
        >
          {renderLayout()}
        </Card>
      </div>
    </div>
  );
};

export default ResumePreview;
