import { Camera, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface PersonalInfoSectionProps {
  data: any;
  onChange: (data: any) => void;
}

const PersonalInfoSection = ({ data, onChange }: PersonalInfoSectionProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [charCount, setCharCount] = useState(0);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className="p-6">
        <CollapsibleTrigger className="flex items-center justify-between w-full mb-4">
          <h2 className="text-xl font-semibold">Личная информация</h2>
          <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </CollapsibleTrigger>

        <CollapsibleContent className="space-y-4">
          {/* Фото */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full border-2 border-dashed border-muted-foreground/25 flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
              <div className="text-center">
                <Camera className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Добавить фото</span>
              </div>
            </div>
          </div>

          {/* Имя и Фамилия */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Имя *</Label>
              <Input id="firstName" placeholder="Иван" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Фамилия *</Label>
              <Input id="lastName" placeholder="Иванов" />
            </div>
          </div>

          {/* Email и Телефон */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" placeholder="ivan@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
            </div>
          </div>

          {/* Город */}
          <div className="space-y-2">
            <Label htmlFor="location">Город</Label>
            <Input id="location" placeholder="Москва, Россия" />
          </div>

          {/* Профессиональное резюме */}
          <div className="space-y-2">
            <Label htmlFor="summary">Профессиональное резюме</Label>
            <Textarea
              id="summary"
              placeholder="Опишите ваш опыт, ключевые навыки и профессиональные достижения..."
              className="min-h-[120px]"
              maxLength={500}
              onChange={(e) => setCharCount(e.target.value.length)}
            />
            <div className="flex items-center justify-between">
              <Button variant="outline" size="sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Улучшить с помощью AI
              </Button>
              <span className="text-xs text-muted-foreground">{charCount}/500</span>
            </div>
          </div>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default PersonalInfoSection;
