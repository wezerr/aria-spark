import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import MonthYearPicker from "@/components/ui/month-year-picker";

interface WorkEntry {
  id: string;
  company: string;
  position: string;
  dateFrom: string;
  dateTo: string;
  currentlyWorking: boolean;
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
        { 
          id: Date.now().toString(), 
          company: "", 
          position: "",
          dateFrom: "",
          dateTo: "",
          currentlyWorking: false
        },
      ],
    });
  };

  const removeEntry = (id: string) => {
    onChange({
      workHistory: data.workHistory.filter((entry) => entry.id !== id),
    });
  };

  const updateEntry = (
    id: string, 
    field: "company" | "position" | "dateFrom" | "dateTo" | "currentlyWorking", 
    value: string | boolean
  ) => {
    onChange({
      workHistory: data.workHistory.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      ),
    });
  };

  // Sort work history by date (newest first)
  const sortedWorkHistory = [...data.workHistory].sort((a, b) => {
    if (!a.dateFrom) return 1;
    if (!b.dateFrom) return -1;
    
    // Parse date format (assuming MM/YYYY or similar)
    const dateA = new Date(a.dateFrom);
    const dateB = new Date(b.dateFrom);
    
    // Sort descending (newest first)
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        Укажите места работы и период занятости
      </p>

      {sortedWorkHistory.map((entry, index) => (
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

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`dateFrom-${entry.id}`}>Период работы: с *</Label>
              <MonthYearPicker
                value={entry.dateFrom}
                onChange={(value) => updateEntry(entry.id, "dateFrom", value)}
                placeholder="Месяц и год"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`dateTo-${entry.id}`}>по *</Label>
              <MonthYearPicker
                value={entry.dateTo}
                onChange={(value) => updateEntry(entry.id, "dateTo", value)}
                placeholder="Месяц и год"
                disabled={entry.currentlyWorking}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id={`current-${entry.id}`}
              checked={entry.currentlyWorking}
              onCheckedChange={(checked) => 
                updateEntry(entry.id, "currentlyWorking", checked as boolean)
              }
            />
            <Label 
              htmlFor={`current-${entry.id}`}
              className="text-sm font-normal cursor-pointer"
            >
              Работаю здесь в настоящее время
            </Label>
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
