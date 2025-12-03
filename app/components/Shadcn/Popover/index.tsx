import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { LucideIcon } from "lucide-react";

import React, { useRef } from "react";
import ButtonComponent from "../Button";

interface IPopoverComponent {
  children: React.ReactNode;
  icon: LucideIcon;
  textButton: string;
}

export default function PopoverComponent({
  children,
  icon: Icon,
  textButton,
}: IPopoverComponent) {
  const popupContainer = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={popupContainer}>
      <Popover>
        <PopoverTrigger asChild>
          <ButtonComponent variant="primary" icon={Icon}>
            {textButton}
          </ButtonComponent>
        </PopoverTrigger>

        <PopoverContent
          side="bottom"
          className="rounded-md p-4 w-40 bg-[#262332] text-white border-2 border-[#2B2C42]"
        >
          {children}
        </PopoverContent>
      </Popover>
    </div>
  );
}
