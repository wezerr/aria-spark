import { Palette, Layout } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ColorPicker from "./ColorPicker";
import { cn } from "@/lib/utils";

interface ResumeColors {
  background: string;
  text: string;
  heading: string;
  accent: string;
}

interface CustomizationPanelProps {
  colors: ResumeColors;
  onColorsChange: (colors: ResumeColors) => void;
  layout: string;
  onLayoutChange: (layout: string) => void;
}

const layouts = [
  {
    id: "classic",
    name: "Классический",
    description: "Фото сверху по центру",
    preview: (
      <div className="w-full h-24 border rounded-lg p-2 bg-white">
        <div className="flex flex-col items-center gap-1">
          <div className="w-8 h-8 rounded-full bg-primary/20" />
          <div className="w-16 h-1 bg-foreground/20 rounded" />
          <div className="w-12 h-1 bg-foreground/10 rounded" />
        </div>
      </div>
    ),
  },
  {
    id: "modern",
    name: "Современный",
    description: "Двухколоночный с фото слева",
    preview: (
      <div className="w-full h-24 border rounded-lg p-2 bg-white flex gap-2">
        <div className="w-1/3 bg-primary/10 rounded flex items-start justify-center pt-2">
          <div className="w-6 h-6 rounded-full bg-primary/30" />
        </div>
        <div className="flex-1 space-y-1">
          <div className="w-full h-1 bg-foreground/20 rounded" />
          <div className="w-3/4 h-1 bg-foreground/10 rounded" />
          <div className="w-2/3 h-1 bg-foreground/10 rounded" />
        </div>
      </div>
    ),
  },
  {
    id: "minimal",
    name: "Минималистичный",
    description: "Без фото, компактный",
    preview: (
      <div className="w-full h-24 border rounded-lg p-2 bg-white">
        <div className="space-y-1">
          <div className="w-1/2 h-2 bg-foreground/30 rounded" />
          <div className="w-1/3 h-1 bg-foreground/10 rounded" />
          <div className="mt-2 space-y-1">
            <div className="w-full h-1 bg-foreground/10 rounded" />
            <div className="w-4/5 h-1 bg-foreground/10 rounded" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "sidebar",
    name: "Боковая панель",
    description: "Фото справа в цветной панели",
    preview: (
      <div className="w-full h-24 border rounded-lg p-2 bg-white flex gap-2">
        <div className="flex-1 space-y-1">
          <div className="w-full h-1 bg-foreground/20 rounded" />
          <div className="w-3/4 h-1 bg-foreground/10 rounded" />
          <div className="w-2/3 h-1 bg-foreground/10 rounded" />
        </div>
        <div className="w-1/3 bg-primary/10 rounded flex items-start justify-center pt-2">
          <div className="w-6 h-6 rounded-full bg-primary/30" />
        </div>
      </div>
    ),
  },
];

const CustomizationPanel = ({
  colors,
  onColorsChange,
  layout,
  onLayoutChange,
}: CustomizationPanelProps) => {
  return (
    <Card className="p-6">
      <Tabs defaultValue="layout" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="layout">
            <Layout className="w-4 h-4 mr-2" />
            Макет
          </TabsTrigger>
          <TabsTrigger value="colors">
            <Palette className="w-4 h-4 mr-2" />
            Цвета
          </TabsTrigger>
        </TabsList>

        <TabsContent value="layout" className="space-y-4 mt-4">
          <div>
            <Label className="text-base mb-3 block">Выберите макет резюме</Label>
            <div className="grid grid-cols-2 gap-3">
              {layouts.map((l) => (
                <button
                  key={l.id}
                  onClick={() => onLayoutChange(l.id)}
                  className={cn(
                    "text-left space-y-2 p-3 rounded-lg border-2 transition-all hover:border-primary/50",
                    layout === l.id
                      ? "border-primary bg-primary/5"
                      : "border-border"
                  )}
                >
                  {l.preview}
                  <div>
                    <div className="font-medium text-sm">{l.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {l.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="colors" className="space-y-4 mt-4">
          <div>
            <Label className="text-base mb-3 block">Настройка цветов</Label>
            <div className="space-y-3">
              <ColorPicker
                label="Цвет фона"
                value={colors.background}
                onChange={(background) =>
                  onColorsChange({ ...colors, background })
                }
              />
              <ColorPicker
                label="Цвет текста"
                value={colors.text}
                onChange={(text) => onColorsChange({ ...colors, text })}
              />
              <ColorPicker
                label="Цвет заголовков"
                value={colors.heading}
                onChange={(heading) => onColorsChange({ ...colors, heading })}
              />
              <ColorPicker
                label="Акцентный цвет"
                value={colors.accent}
                onChange={(accent) => onColorsChange({ ...colors, accent })}
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default CustomizationPanel;
