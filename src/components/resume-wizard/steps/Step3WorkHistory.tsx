import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

interface WorkEntry {
  id: string;
  company: string;
  position: string;
}

interface Step3Data {
  workHistory: WorkEntry[];
}

interface Step3WorkHistoryProps {
  data: Step3Data;
  onChange: (data: Step3Data) => void;
}

const Step3WorkHistory = ({ data, onChange }: Step3WorkHistoryProps) => {
  const addEntry = () => {
    onChange({
      workHistory: [
        ...data.workHistory,
        { id: Date.now().toString(), company: "", position: "" },
      ],
    });
  };

  const removeEntry = (id: string) => {
    onChange({
      workHistory: data.workHistory.filter((entry) => entry.id !== id),
    });
  };

  const updateEntry = (id: string, field: "company" | "position", value: string) => {
    onChange({
      workHistory: data.workHistory.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      ),
    });
  };

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        Укажите компании где вы работали. Детали можно будет добавить позже.
      </p>

      {data.workHistory.map((entry, index) => (
        <div key={entry.id} className="space-y-4 p-4 border rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Место работы #{index + 1}</span>
            {data.workHistory.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeEntry(entry.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor={`company-${entry.id}`}>Название компании *</Label>
            <Input
              id={`company-${entry.id}`}
              value={entry.company}
              onChange={(e) => updateEntry(entry.id, "company", e.target.value)}
              placeholder="Google, Yandex, etc."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`position-${entry.id}`}>Должность *</Label>
            <Input
              id={`position-${entry.id}`}
              value={entry.position}
              onChange={(e) => updateEntry(entry.id, "position", e.target.value)}
              placeholder="Frontend Developer"
            />
          </div>
        </div>
      ))}

      <Button variant="outline" className="w-full" onClick={addEntry}>
        <Plus className="w-4 h-4 mr-2" />
        Добавить место работы
      </Button>
    </div>
  );
};

export default Step3WorkHistory;
