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
  placeholder: string;
  label: string;
  options: Array<IOption>;
}

export default function SelectComponent({
  placeholder,
  label,
  options,
}: ISelectComponent) {
  return (
  <div>
    <Label className="">{label}</Label>
      <Select>
      <SelectTrigger className="h-8 bg-[#1A1724] border-[#2B2C42] text-white">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent className="bg-[#1A1724] border-[#2B2C42] text-white hover:bg-green-300">
        <SelectGroup>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
  );
}
