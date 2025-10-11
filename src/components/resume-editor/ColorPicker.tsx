import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
}

const ColorPicker = ({ label, value, onChange }: ColorPickerProps) => {
  const presetColors = [
    "#000000", "#374151", "#1f2937", "#111827",
    "#3b82f6", "#2563eb", "#1d4ed8", "#1e40af",
    "#10b981", "#059669", "#047857", "#065f46",
    "#f59e0b", "#d97706", "#b45309", "#92400e",
    "#ef4444", "#dc2626", "#b91c1c", "#991b1b",
    "#8b5cf6", "#7c3aed", "#6d28d9", "#5b21b6",
  ];

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
              className="w-6 h-6 rounded border"
              style={{ backgroundColor: value }}
            />
            <span className="text-sm">{value}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Input
                type="color"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-12 h-12 p-1 cursor-pointer"
              />
              <Input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="#000000"
                className="flex-1"
              />
            </div>
            
            <div>
              <Label className="text-xs text-muted-foreground mb-2 block">
                Готовые цвета
              </Label>
              <div className="grid grid-cols-8 gap-2">
                {presetColors.map((color) => (
                  <button
                    key={color}
                    className="w-6 h-6 rounded border hover:scale-110 transition-transform"
                    style={{ backgroundColor: color }}
                    onClick={() => onChange(color)}
                  />
                ))}
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ColorPicker;
