import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Step4Data {
  institution: string;
  degree: string;
  year: string;
}

interface Step4EducationProps {
  data: Step4Data;
  onChange: (data: Step4Data) => void;
}

const Step4Education = ({ data, onChange }: Step4EducationProps) => {
  const handleChange = (field: keyof Step4Data, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="institution">Учебное заведение *</Label>
        <Input
          id="institution"
          value={data.institution}
          onChange={(e) => handleChange("institution", e.target.value)}
          placeholder="МГУ им. М.В. Ломоносова"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="degree">Специальность *</Label>
        <Input
          id="degree"
          value={data.degree}
          onChange={(e) => handleChange("degree", e.target.value)}
          placeholder="Информатика и вычислительная техника"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="year">Год окончания *</Label>
        <Input
          id="year"
          type="number"
          value={data.year}
          onChange={(e) => handleChange("year", e.target.value)}
          placeholder="2020"
          min="1950"
          max={new Date().getFullYear() + 10}
        />
      </div>
    </div>
  );
};

export default Step4Education;
