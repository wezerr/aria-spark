import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Step1Data {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
}

interface Step1PersonalProps {
  data: Step1Data;
  onChange: (data: Step1Data) => void;
}

const Step1Personal = ({ data, onChange }: Step1PersonalProps) => {
  const handleChange = (field: keyof Step1Data, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">Имя *</Label>
          <Input
            id="firstName"
            value={data.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            placeholder="Иван"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Фамилия *</Label>
          <Input
            id="lastName"
            value={data.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            placeholder="Иванов"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          value={data.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="ivan@example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Телефон</Label>
        <Input
          id="phone"
          type="tel"
          value={data.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          placeholder="+7 (999) 123-45-67"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="city">Город *</Label>
        <Input
          id="city"
          value={data.city}
          onChange={(e) => handleChange("city", e.target.value)}
          placeholder="Москва, Россия"
        />
      </div>
    </div>
  );
};

export default Step1Personal;
