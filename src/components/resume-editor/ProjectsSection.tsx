import { useState } from "react";
import { Plus, Pencil, Trash2, GripVertical, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

interface ProjectsSectionProps {
  data: any[];
  onChange: (data: any[]) => void;
}

const ProjectsSection = ({ data, onChange }: ProjectsSectionProps) => {
  const [isOpen, setIsOpen] = useState(true);

  // Mock data
  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "Полнофункциональная платформа электронной коммерции с корзиной, оплатой и панелью администратора",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      url: "https://example.com"
    },
    {
      id: 2,
      name: "Task Management App",
      description: "Приложение для управления задачами с drag-and-drop интерфейсом",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      url: null
    }
  ];

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className="p-6">
        <CollapsibleTrigger className="flex items-center justify-between w-full mb-4">
          <h2 className="text-xl font-semibold">Проекты</h2>
          <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </CollapsibleTrigger>

        <CollapsibleContent className="space-y-4">
          {projects.map((project) => (
            <Card key={project.id} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{project.name}</h3>
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

              <p className="text-sm mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline">{tech}</Badge>
                ))}
              </div>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  {project.url}
                </a>
              )}
            </Card>
          ))}

          <Button variant="outline" className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Добавить проект
          </Button>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default ProjectsSection;
