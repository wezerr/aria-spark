import { useState } from "react";
import { Plus, X, Code, Palette, Database, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

interface SkillsSectionProps {
  data: any;
  onChange: (data: any) => void;
}

const SkillsSection = ({ data, onChange }: SkillsSectionProps) => {
  const [isOpen, setIsOpen] = useState(true);

  // Mock data
  const skillCategories = [
    {
      id: 1,
      name: "Языки программирования",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Python", "Go"]
    },
    {
      id: 2,
      name: "Фреймворки и библиотеки",
      icon: Palette,
      skills: ["React", "Next.js", "Vue.js", "Node.js", "Express"]
    },
    {
      id: 3,
      name: "Базы данных",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis"]
    }
  ];

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className="p-6">
        <CollapsibleTrigger className="flex items-center justify-between w-full mb-4">
          <h2 className="text-xl font-semibold">Навыки</h2>
          <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </CollapsibleTrigger>

        <CollapsibleContent className="space-y-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-primary" />
                  <h3 className="font-medium">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="pl-3 pr-1 py-1">
                      {skill}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-5 w-5 ml-1 hover:bg-destructive/20"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </Badge>
                  ))}
                  <Button variant="ghost" size="sm" className="h-7">
                    <Plus className="w-3 h-3 mr-1" />
                    Добавить
                  </Button>
                </div>
              </div>
            );
          })}

          <div className="flex gap-2 pt-2">
            <Button variant="outline" className="flex-1">
              <Plus className="w-4 h-4 mr-2" />
              Добавить категорию
            </Button>
            <Button variant="outline" className="flex-1">
              <Sparkles className="w-4 h-4 mr-2" />
              AI подберёт навыки
            </Button>
          </div>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default SkillsSection;
