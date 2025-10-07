import { Download, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface ResumePreviewProps {
  data: any;
  template: string;
}

const ResumePreview = ({ data, template }: ResumePreviewProps) => {
  const [zoom, setZoom] = useState(100);

  return (
    <div className="h-full flex flex-col">
      {/* Preview Header */}
      <div className="p-4 border-b flex items-center justify-between">
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
      <div className="flex-1 overflow-auto p-4 bg-muted/30">
        <Card
          className="mx-auto bg-white shadow-lg"
          style={{
            width: `${(210 * zoom) / 100}mm`,
            minHeight: `${(297 * zoom) / 100}mm`,
            transform: `scale(${zoom / 100})`,
            transformOrigin: "top center"
          }}
        >
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-6 pb-6 border-b">
              <h1 className="text-3xl font-bold mb-2">Иван Иванов</h1>
              <p className="text-muted-foreground mb-2">Senior Frontend Developer</p>
              <div className="flex justify-center gap-4 text-sm text-muted-foreground">
                <span>ivan@example.com</span>
                <span>•</span>
                <span>+7 (999) 123-45-67</span>
                <span>•</span>
                <span>Москва</span>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2 text-primary">Профессиональное резюме</h2>
              <p className="text-sm">
                Опытный фронтенд-разработчик с 5+ годами опыта в создании современных веб-приложений.
                Специализируюсь на React, TypeScript и создании масштабируемых архитектур.
              </p>
            </div>

            {/* Experience */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3 text-primary">Опыт работы</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-semibold">Senior Frontend Developer</h3>
                      <p className="text-sm text-muted-foreground">Tech Corp</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2022 - Настоящее время</span>
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
              <h2 className="text-lg font-semibold mb-3 text-primary">Образование</h2>
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">МГУ им. М.В. Ломоносова</h3>
                    <p className="text-sm text-muted-foreground">Магистр · Информатика</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2018 - 2020</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3 text-primary">Навыки</h2>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-lg font-semibold mb-3 text-primary">Языки</h2>
              <div className="flex gap-4 text-sm">
                <span>Русский (Native)</span>
                <span>Английский (Fluent)</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Preview Footer */}
      <div className="p-4 border-t">
        <Button className="w-full">
          <Download className="w-4 h-4 mr-2" />
          Скачать PDF
        </Button>
      </div>
    </div>
  );
};

export default ResumePreview;
