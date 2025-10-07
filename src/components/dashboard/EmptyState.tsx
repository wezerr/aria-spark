import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Sparkles, Zap, Download } from "lucide-react";
import { toast } from "sonner";

export function EmptyState() {
  const handleCreateResume = () => {
    toast.success("Создание резюме...");
    // Здесь будет навигация к редактору
  };

  const features = [
    {
      icon: Sparkles,
      title: "AI Ассистент",
      description: "Искусственный интеллект поможет заполнить резюме",
    },
    {
      icon: Zap,
      title: "Быстрое создание",
      description: "Создайте профессиональное резюме за 10 минут",
    },
    {
      icon: Download,
      title: "Экспорт в PDF",
      description: "Скачайте резюме в любой момент",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="max-w-3xl w-full space-y-8 text-center animate-fade-in">
        {/* Illustration */}
        <div className="relative mx-auto w-64 h-64">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
          <div className="relative flex items-center justify-center h-full">
            <FileText className="w-32 h-32 text-primary opacity-80" strokeWidth={1.5} />
            <Sparkles className="w-12 h-12 text-secondary absolute top-8 right-12 animate-pulse" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Добро пожаловать в Resume AI
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Создайте своё первое профессиональное резюме с помощью искусственного интеллекта
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <Button
            size="lg"
            onClick={handleCreateResume}
            className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Создать первое резюме
          </Button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 pt-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <feature.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Optional: Video tutorial placeholder */}
        <div className="pt-8">
          <button
            onClick={() => toast.info("Видео-туториал в разработке")}
            className="text-sm text-primary hover:underline"
          >
            Посмотреть видео-инструкцию →
          </button>
        </div>
      </div>
    </div>
  );
}
