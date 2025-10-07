import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LanguageEntry {
  name: string;
  level: string;
}

interface Step6Data {
  languages: LanguageEntry[];
}

interface Step6LanguagesProps {
  data: Step6Data;
  onChange: (data: Step6Data) => void;
}

const Step6Languages = ({ data, onChange }: Step6LanguagesProps) => {
  const availableLanguages = [
    "Русский",
    "Английский",
    "Немецкий",
    "Французский",
    "Испанский",
    "Китайский",
  ];

  const levels = ["Native", "Fluent", "Advanced", "Intermediate", "Basic"];

  const isLanguageSelected = (lang: string) =>
    data.languages.some((l) => l.name === lang);

  const toggleLanguage = (lang: string, checked: boolean) => {
    if (checked) {
      onChange({
        languages: [...data.languages, { name: lang, level: "Intermediate" }],
      });
    } else {
      onChange({
        languages: data.languages.filter((l) => l.name !== lang),
      });
    }
  };

  const updateLevel = (lang: string, level: string) => {
    onChange({
      languages: data.languages.map((l) =>
        l.name === lang ? { ...l, level } : l
      ),
    });
  };

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        Выберите языки которыми владеете и укажите уровень
      </p>

      <div className="space-y-4">
        {availableLanguages.map((lang) => {
          const selected = isLanguageSelected(lang);
          const entry = data.languages.find((l) => l.name === lang);

          return (
            <div
              key={lang}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center gap-3">
                <Checkbox
                  id={lang}
                  checked={selected}
                  onCheckedChange={(checked) =>
                    toggleLanguage(lang, checked as boolean)
                  }
                />
                <Label htmlFor={lang} className="cursor-pointer">
                  {lang}
                </Label>
              </div>

              {selected && (
                <Select
                  value={entry?.level}
                  onValueChange={(level) => updateLevel(lang, level)}
                >
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Step6Languages;
