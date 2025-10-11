import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
  type: "background" | "text" | "heading" | "accent";
}

const colorPalettes = {
  background: [
    { color: "#ffffff", name: "Белый" },
    { color: "#f9fafb", name: "Светло-серый" },
    { color: "#f3f4f6", name: "Серый" },
    { color: "#e5e7eb", name: "Тёмно-серый" },
    { color: "#fef3c7", name: "Кремовый" },
    { color: "#fce7f3", name: "Светло-розовый" },
    { color: "#dbeafe", name: "Светло-голубой" },
    { color: "#e0e7ff", name: "Лавандовый" },
  ],
  text: [
    { color: "#000000", name: "Чёрный" },
    { color: "#1f2937", name: "Угольный" },
    { color: "#374151", name: "Тёмно-серый" },
    { color: "#4b5563", name: "Серый" },
    { color: "#1e3a8a", name: "Тёмно-синий" },
    { color: "#064e3b", name: "Тёмно-зелёный" },
    { color: "#7c2d12", name: "Коричневый" },
    { color: "#581c87", name: "Тёмно-фиолетовый" },
  ],
  heading: [
    { color: "#000000", name: "Чёрный" },
    { color: "#1f2937", name: "Угольный" },
    { color: "#1e40af", name: "Синий" },
    { color: "#065f46", name: "Зелёный" },
    { color: "#92400e", name: "Коричневый" },
    { color: "#991b1b", name: "Красный" },
    { color: "#5b21b6", name: "Фиолетовый" },
    { color: "#0c4a6e", name: "Тёмно-синий" },
  ],
  accent: [
    { color: "#3b82f6", name: "Синий" },
    { color: "#2563eb", name: "Яркий синий" },
    { color: "#10b981", name: "Зелёный" },
    { color: "#059669", name: "Изумрудный" },
    { color: "#f59e0b", name: "Янтарный" },
    { color: "#d97706", name: "Оранжевый" },
    { color: "#ef4444", name: "Красный" },
    { color: "#8b5cf6", name: "Фиолетовый" },
    { color: "#06b6d4", name: "Бирюзовый" },
    { color: "#ec4899", name: "Розовый" },
  ],
};

const ColorPicker = ({ label, value, onChange, type }: ColorPickerProps) => {
  const colors = colorPalettes[type];

  const selectedColorName = colors.find(c => c.color === value)?.name || value;

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start gap-2"
          >
            <div
              className="w-6 h-6 rounded border shadow-sm"
              style={{ backgroundColor: value }}
            />
            <span className="text-sm">{selectedColorName}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <div className="space-y-3">
            <Label className="text-xs text-muted-foreground">
              Выберите цвет
            </Label>
            <div className="grid grid-cols-2 gap-2">
              {colors.map(({ color, name }) => (
                <button
                  key={color}
                  className={cn(
                    "flex items-center gap-2 p-2 rounded-lg border-2 hover:border-primary/50 transition-all text-left",
                    value === color
                      ? "border-primary bg-primary/5"
                      : "border-border"
                  )}
                  onClick={() => onChange(color)}
                >
                  <div
                    className="w-8 h-8 rounded border shadow-sm flex-shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{name}</div>
                    <div className="text-xs text-muted-foreground">{color}</div>
                  </div>
                  {value === color && (
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ColorPicker;
