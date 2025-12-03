import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LucideIcon } from "lucide-react";

interface IInputComponent {
  label: string;
  icon?: LucideIcon;
}

export default function InputComponent({
  label,
  icon: Icon,
  ...props
}: IInputComponent) {
  return (
    <div className="text-white w-auto">
      <Label>{label}</Label>

      <div className="relative mt-2">
        {Icon && (
          <Icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        )}

        <Input
          {...props}
          className={`h-7 bg-[#1A1724] border-[#2B2C42] ${Icon ? "pl-9" : ""}`}
        />
      </div>
    </div>
  );
}
