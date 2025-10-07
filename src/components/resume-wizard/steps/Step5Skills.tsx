import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState, KeyboardEvent } from "react";

interface Step5Data {
  skills: string[];
}

interface Step5SkillsProps {
  data: Step5Data;
  onChange: (data: Step5Data) => void;
}

const Step5Skills = ({ data, onChange }: Step5SkillsProps) => {
  const [inputValue, setInputValue] = useState("");

  const suggestedSkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
    "Git",
    "Docker",
    "AWS",
    "REST API",
  ];

  const addSkill = (skill: string) => {
    const trimmedSkill = skill.trim();
    if (trimmedSkill && !data.skills.includes(trimmedSkill)) {
      onChange({ skills: [...data.skills, trimmedSkill] });
      setInputValue("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    onChange({
      skills: data.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue) {
      e.preventDefault();
      addSkill(inputValue);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="skills">Ваши навыки</Label>
        <Input
          id="skills"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Введите навык и нажмите Enter"
        />
        <p className="text-xs text-muted-foreground">
          Вводите навыки через Enter или выбирайте из предложенных ниже
        </p>
      </div>

      {/* Selected Skills */}
      {data.skills.length > 0 && (
        <div>
          <Label className="mb-2 block">Выбранные навыки:</Label>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="pl-3 pr-1 py-1">
                {skill}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5 ml-1 hover:bg-destructive/20"
                  onClick={() => removeSkill(skill)}
                >
                  <X className="w-3 h-3" />
                </Button>
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Suggested Skills */}
      <div>
        <Label className="mb-2 block">Популярные навыки:</Label>
        <div className="flex flex-wrap gap-2">
          {suggestedSkills
            .filter((skill) => !data.skills.includes(skill))
            .map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => addSkill(skill)}
              >
                + {skill}
              </Badge>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Step5Skills;
