import { Button, ButtonProps } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface IButtonComponent extends ButtonProps {
  icon?: LucideIcon;
}

export default function ButtonComponent({ icon: Icon, className, ...props }: IButtonComponent) {
  return (
    <Button
      variant="primary"
      className={`text-xs h-7 flex items-center gap-2 ${className ?? ""}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {props.children}
    </Button>
  );
}
