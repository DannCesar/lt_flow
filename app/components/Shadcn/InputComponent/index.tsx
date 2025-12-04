
import { LucideIcon } from "lucide-react";
import { Input } from "../ui/input";

interface IInputComponent {
  icon?: LucideIcon;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
  type?: string;
}

export default function InputComponent({
  icon: Icon,
  value,
  onChange,
  name,
  placeholder,
  type = "text",
}: IInputComponent) {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="relative">
       {Icon && (
        <Icon
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          size={18}
        />
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
