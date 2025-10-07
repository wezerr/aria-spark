import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Step2Data {
  position: string;
  description: string;
}

interface Step2ExperienceProps {
  data: Step2Data;
  onChange: (data: Step2Data) => void;
}

const Step2Experience = ({ data, onChange }: Step2ExperienceProps) => {
  const handleChange = (field: keyof Step2Data, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="position">Желаемая должность *</Label>
        <Input
          id="position"
          value={data.position}
          onChange={(e) => handleChange("position", e.target.value)}
          placeholder="Senior Frontend Developer"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">
          Опишите ваш опыт в нескольких предложениях *
        </Label>
        <Textarea
          id="description"
          value={data.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Расскажите о ваших основных достижениях, технологиях с которыми работали, проектах..."
          className="min-h-[120px]"
        />
        <p className="text-xs text-muted-foreground">
          Эта информация поможет AI создать более релевантное резюме
        </p>
      </div>
    </div>
  );
};

export default Step2Experience;
