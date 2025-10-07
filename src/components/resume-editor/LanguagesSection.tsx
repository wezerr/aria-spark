import { useState } from "react";
import { Plus, Globe, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

interface LanguagesSectionProps {
  data: any[];
  onChange: (data: any[]) => void;
}

const LanguagesSection = ({ data, onChange }: LanguagesSectionProps) => {
  const [isOpen, setIsOpen] = useState(true);

  // Mock data
  const languages = [
    { id: 1, name: "Русский", level: "Native" },
    { id: 2, name: "Английский", level: "Fluent" },
    { id: 3, name: "Немецкий", level: "Intermediate" }
  ];

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className="p-6">
        <CollapsibleTrigger className="flex items-center justify-between w-full mb-4">
          <h2 className="text-xl font-semibold">Языки</h2>
          <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </CollapsibleTrigger>

        <CollapsibleContent className="space-y-3">
          {languages.map((lang) => (
            <div key={lang.id} className="flex items-center gap-3 p-3 rounded-lg border">
              <Globe className="w-5 h-5 text-muted-foreground" />
              <span className="flex-1 font-medium">{lang.name}</span>
              <Select defaultValue={lang.level}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Native">Native</SelectItem>
                  <SelectItem value="Fluent">Fluent</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Basic">Basic</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}

          <Button variant="outline" className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Добавить язык
          </Button>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default LanguagesSection;
