import { Link } from "react-router-dom";
import { Bot, Pencil, Upload, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const ResumeNew = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleImport = () => {
    if (selectedFile) {
      console.log("Importing file:", selectedFile.name);
      // Логика импорта будет добавлена позже
    }
  };

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
              <Dialog>
                <DialogTrigger asChild>
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
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Импорт резюме</DialogTitle>
                    <DialogDescription>
                      Загрузите файл резюме в формате PDF или DOCX
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="file">Файл резюме</Label>
                      <Input
                        id="file"
                        type="file"
                        accept=".pdf,.docx,.doc"
                        onChange={handleFileChange}
                      />
                      {selectedFile && (
                        <p className="text-sm text-muted-foreground">
                          Выбран файл: {selectedFile.name}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    <DialogTrigger asChild>
                      <Button variant="outline">Отмена</Button>
                    </DialogTrigger>
                    <Button onClick={handleImport} disabled={!selectedFile}>
                      Импортировать
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeNew;
