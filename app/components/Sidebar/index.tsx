import { PanelLeft, ListIcon, LogOutIcon } from "lucide-react";
export default function Sidebar() {
  return (
    <div className="hidden md:flex cursor-pointer flex-col px-7 max-w-52  text-white gap-7 h-full">
      <button className="w-auto flex hover:bg-[#2B2C42] gap-5 cursor-pointer ">
        <PanelLeft width={28} height={28} />
        Painel
      </button>
      <button className="flex hover:bg-[#2B2C42] gap-5 cursor-pointer ">
        <ListIcon width={28} height={28} />
        <span>Transações</span>
      </button>
      <button className="flex hover:bg-[#2B2C42] mt-96 gap-5 cursor-pointer">
        <LogOutIcon width={28} height={28} />
        <span>Sair</span>
      </button>
    </div>
  );
}
