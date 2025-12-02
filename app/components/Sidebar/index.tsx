import { Button } from "@/components/ui/button";
import { PanelLeft, ListIcon, LogOutIcon } from "lucide-react";
import Link from "next/link";
export default function Sidebar() {
  return (
    <div className="hidden md:text-sm md:flex cursor-pointer flex-col px-7 py-7 max-w-52  text-white gap-7 h-full">
      <Link href="/">
        <Button className="w-auto rounded-sm flex font-normal justify-start items-center shadow-none bg-[#1A1724]  hover:bg-[#2B2C42] gap-5 cursor-pointer ">
        <PanelLeft width={20} height={20} />
        <span>Painel</span>
      </Button>
      </Link>
      <Link href="/transactions">
        <Button className="w-auto rounded-sm flex font-normal justify-start items-center shadow-none bg-[#1A1724]  hover:bg-[#2B2C42] gap-5 cursor-pointer ">
        <ListIcon width={20} height={20} />
        Transações
      </Button>
      </Link>
      <Button className="flex rounded-sm justify-start items-center shadow-none bg-[#1A1724]  hover:bg-[#2B2C42] mt-96 gap-5 cursor-pointer">
        <LogOutIcon width={20} height={20} />
        Sair
      </Button>
    </div>
  );
}
