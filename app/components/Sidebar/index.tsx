import { PanelLeft, ListIcon, LogOutIcon } from "lucide-react";
export default function Sidebar() {
  return (
    <div className="hidden md:text-sm md:flex cursor-pointer flex-col px-7 py-7 max-w-52  text-white gap-7 h-full">
      <button className="w-auto flex  items-center  hover:bg-[#2B2C42] gap-5 cursor-pointer ">
        <PanelLeft width={20} height={20} />
        <span className="">Painel</span>
      </button>
      <button className="flex  items-center hover:bg-[#2B2C42] gap-5 cursor-pointer ">
        <ListIcon width={20} height={20} />
        <span>Transações</span>
      </button>
      <button className="flex  items-center hover:bg-[#2B2C42] mt-96 gap-5 cursor-pointer">
        <LogOutIcon width={20} height={20} />
        <span>Sair</span>
      </button>
    </div>
  );
}
