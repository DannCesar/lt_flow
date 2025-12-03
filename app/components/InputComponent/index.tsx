import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LucideIcon } from "lucide-react";

interface IInputComponent {
  label: string;
  icon?: LucideIcon;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
  type?: string;
}

export default function InputComponent({
  label,
  icon: Icon,
  value,
  onChange,
  name,
  placeholder,
  type = "text",
}: IInputComponent) {
  return (
    <div className="flex flex-col gap-2 ">
      <Label htmlFor={name}>{label}</Label>

      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        )}

        <Input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="h-8 bg-[#1A1724] border-[#2B2C42] "
        />
      </div>
    </div>
  );
}
