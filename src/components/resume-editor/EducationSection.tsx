import { useState } from "react";
import { Plus, Pencil, Trash2, GripVertical } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

interface EducationSectionProps {
  data: any[];
  onChange: (data: any[]) => void;
}

const EducationSection = ({ data, onChange }: EducationSectionProps) => {
  const [isOpen, setIsOpen] = useState(true);

  // Mock data
  const education = [
    {
      id: 1,
      institution: "МГУ им. М.В. Ломоносова",
      degree: "Магистр",
      field: "Информатика и вычислительная техника",
      period: "2018 - 2020"
    },
    {
      id: 2,
      institution: "МФТИ",
      degree: "Бакалавр",
      field: "Прикладная математика и информатика",
      period: "2014 - 2018"
    }
  ];

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className="p-6">
        <CollapsibleTrigger className="flex items-center justify-between w-full mb-4">
          <h2 className="text-xl font-semibold">Образование</h2>
          <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </CollapsibleTrigger>

        <CollapsibleContent className="space-y-4">
          {education.map((edu) => (
            <Card key={edu.id} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{edu.institution}</h3>
                  <p className="text-muted-foreground">{edu.degree} · {edu.field}</p>
                  <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
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
            </Card>
          ))}

          <Button variant="outline" className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Добавить образование
          </Button>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default EducationSection;
