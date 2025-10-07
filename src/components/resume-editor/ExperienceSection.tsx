import { useState } from "react";
import { Plus, Pencil, Trash2, GripVertical, Sparkles, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

interface ExperienceSectionProps {
  data: any[];
  onChange: (data: any[]) => void;
}

const ExperienceSection = ({ data, onChange }: ExperienceSectionProps) => {
  const [isOpen, setIsOpen] = useState(true);

  // Mock data
  const experiences = [
    {
      id: 1,
      company: "Tech Corp",
      position: "Senior Frontend Developer",
      period: "Янв 2022 - Настоящее время",
      description: "Разработка и поддержка веб-приложений на React, TypeScript и Next.js",
      achievements: [
        "Увеличил производительность приложения на 40%",
        "Внедрил CI/CD pipeline",
        "Руководил командой из 3 разработчиков"
      ]
    },
    {
      id: 2,
      company: "StartUp Inc",
      position: "Frontend Developer",
      period: "Мар 2020 - Дек 2021",
      description: "Создание пользовательских интерфейсов для SaaS платформы",
      achievements: [
        "Разработал систему компонентов с нуля",
        "Внедрил автоматизированное тестирование"
      ]
    }
  ];

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className="p-6">
        <CollapsibleTrigger className="flex items-center justify-between w-full mb-4">
          <h2 className="text-xl font-semibold">Опыт работы</h2>
          <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </CollapsibleTrigger>

        <CollapsibleContent className="space-y-4">
          {experiences.map((exp) => (
            <Card key={exp.id} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{exp.company}</h3>
                  <p className="text-muted-foreground">{exp.position}</p>
                  <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 cursor-grab">
                    <GripVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <p className="text-sm mb-3">{exp.description}</p>

              <ul className="space-y-1">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}

          <Button variant="outline" className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Добавить место работы
          </Button>

          <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
            <Lightbulb className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground flex-1">Не знаете что написать?</span>
            <Button variant="ghost" size="sm">
              <Sparkles className="w-4 h-4 mr-2" />
              AI поможет описать ваш опыт
            </Button>
          </div>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default ExperienceSection;
