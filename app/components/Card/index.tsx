import { LucideIcon } from "lucide-react";

interface ICardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  width: string | number;
}
export default function Card({ title, value, icon: Icon,width }: ICardProps) {
  return (
    <div className="flex flex-col rounded-lg border-2 border-[#2B2C42] p-4 w-[230px] h-[136px] bg-[#262332]">
      <div className="flex">
        <Icon width={width} />
        <span>{title}</span>
      </div>
      <div className="p-4">
        <span>{value}</span>
      </div>
    </div>
  );
}
