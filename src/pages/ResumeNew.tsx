import { Link } from "react-router-dom";
import { Bot, Pencil, Upload, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ResumeNew = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" />
          Назад к списку
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Как вы хотите создать резюме?</h1>
          <p className="text-center text-muted-foreground mb-12">Выберите наиболее удобный способ</p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer group">
              <Link to="/resume/wizard" className="block text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Bot className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">С помощью AI</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Ответьте на несколько вопросов, AI создаст резюме за вас
                </p>
                <Button className="w-full">Начать</Button>
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer group">
              <Link to="/resume/editor/new?mode=manual" className="block text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Pencil className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Заполнить вручную</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Заполните все поля самостоятельно
                </p>
                <Button className="w-full">Начать</Button>
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer group">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Импортировать</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Загрузите существующее резюме в PDF или DOCX
                </p>
                <Button className="w-full" variant="secondary">
                  Выбрать файл
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeNew;
