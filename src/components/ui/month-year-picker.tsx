import { useState } from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MonthYearPickerProps {
  value?: string; // Format: "YYYY-MM"
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const MonthYearPicker = ({
  value,
  onChange,
  placeholder = "Выберите месяц и год",
  disabled = false,
}: MonthYearPickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Parse the value to get month and year
  const parseValue = (val?: string) => {
    if (!val) return { month: new Date().getMonth(), year: new Date().getFullYear() };
    const [year, month] = val.split("-").map(Number);
    return { month: month - 1, year }; // month is 0-indexed
  };

  const { month: selectedMonth, year: selectedYear } = parseValue(value);
  const [tempMonth, setTempMonth] = useState(selectedMonth);
  const [tempYear, setTempYear] = useState(selectedYear);

  const months = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

  const handleApply = () => {
    const formattedValue = `${tempYear}-${String(tempMonth + 1).padStart(2, "0")}`;
    onChange(formattedValue);
    setIsOpen(false);
  };

  const displayValue = value
    ? `${months[selectedMonth]} ${selectedYear}`
    : placeholder;

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !value && "text-muted-foreground",
            disabled && "opacity-50 cursor-not-allowed"
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {displayValue}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4" align="start">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Месяц</label>
            <Select
              value={String(tempMonth)}
              onValueChange={(val) => setTempMonth(Number(val))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {months.map((month, index) => (
                  <SelectItem key={index} value={String(index)}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Год</label>
            <Select
              value={String(tempYear)}
              onValueChange={(val) => setTempYear(Number(val))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="max-h-[200px]">
                {years.map((year) => (
                  <SelectItem key={year} value={String(year)}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setIsOpen(false)}
            >
              Отмена
            </Button>
            <Button className="flex-1" onClick={handleApply}>
              Применить
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MonthYearPicker;
