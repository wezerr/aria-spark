import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ResumeView = () => {
  // Здесь будут загружаться реальные данные резюме по ID
  const resumeData = {
    name: "Иван Иванов",
    position: "Senior Frontend Developer",
    email: "ivan@example.com",
    phone: "+7 (999) 123-45-67",
    location: "Москва",
    summary: "Опытный фронтенд-разработчик с 5+ годами опыта в создании современных веб-приложений. Специализируюсь на React, TypeScript и создании масштабируемых архитектур.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  };

  const colors = {
    background: "#ffffff",
    text: "#000000",
    heading: "#1f2937",
    accent: "#3b82f6"
  };

  const handleDownload = () => {
    // Логика скачивания PDF
    console.log("Скачивание резюме...");
  };

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      {/* Header с кнопкой скачивания */}
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">{resumeData.name}</h1>
            <p className="text-sm text-muted-foreground">{resumeData.position}</p>
          </div>
          <Button onClick={handleDownload} className="gap-2">
            <Download className="w-4 h-4" />
            Скачать PDF
          </Button>
        </div>
      </header>

      {/* Resume Content */}
      <main className="flex-1 container mx-auto px-4 py-8 flex justify-center">
        <Card
          className="shadow-2xl overflow-hidden"
          style={{
            width: "210mm",
            minHeight: "297mm",
          }}
        >
          <div className="p-8" style={{ backgroundColor: colors.background, color: colors.text }}>
            {/* Header with photo */}
            <div className="text-center mb-6 pb-6 border-b">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                <img 
                  src={resumeData.photo}
                  alt={resumeData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold mb-2" style={{ color: colors.heading }}>
                {resumeData.name}
              </h2>
              <p className="text-lg mb-2" style={{ color: colors.accent }}>
                {resumeData.position}
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <span>{resumeData.email}</span>
                <span>•</span>
                <span>{resumeData.phone}</span>
                <span>•</span>
                <span>{resumeData.location}</span>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2" style={{ color: colors.heading }}>
                Профессиональное резюме
              </h3>
              <p className="text-sm">{resumeData.summary}</p>
            </div>

            {/* Experience */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3" style={{ color: colors.heading }}>
                Опыт работы
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-semibold">Senior Frontend Developer</h4>
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
              <h3 className="text-lg font-semibold mb-3" style={{ color: colors.heading }}>
                Образование
              </h3>
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">МГУ им. М.В. Ломоносова</h4>
                    <p className="text-sm opacity-70">Магистр · Информатика</p>
                  </div>
                  <span className="text-sm opacity-70">2018 - 2020</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3" style={{ color: colors.heading }}>
                Навыки
              </h3>
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
              <h3 className="text-lg font-semibold mb-3" style={{ color: colors.heading }}>
                Языки
              </h3>
              <div className="flex gap-4 text-sm">
                <span>Русский (Native)</span>
                <span>Английский (Fluent)</span>
              </div>
            </div>
          </div>
        </Card>
      </main>

      {/* Footer with branding */}
      <footer className="bg-background border-t py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Создано с помощью
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
          >
            Resume Expert
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default ResumeView;