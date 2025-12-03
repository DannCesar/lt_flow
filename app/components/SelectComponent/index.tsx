import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IOption {
  label: string;
  value: string;
}

interface ISelectComponent {
  placeholder?: string;
  label: string;
  value?: string;
  onValueChange?: (value: string) => void;
  options: Array<IOption>;
}

export default function SelectComponent({
  placeholder,
  label,
  value,
  onValueChange,
  options,
}: ISelectComponent) {
  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>

      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-full h-8 bg-[#1A1724] border-[#2B2C42]">
          {
            placeholder ? (
              <SelectValue placeholder={placeholder} />
            ): <SelectValue placeholder={"Selecione..."}/>
          }
        </SelectTrigger>

        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
