"use client"
import { PanelLeft, ListIcon, LogOutIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import ButtonComponent from "../Shadcn/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter()

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleLogout = () => {
  document.cookie = "token=; path=/; max-age=0";
  router.push("/login");
  closeSidebar();
};


  return (
    <>
      <ButtonComponent
        onClick={toggleSidebar}
        className="md:hidden fixed top-10 left-0 z-50 p-2 bg-[#1A1724] text-white rounded-lg shadow-xl hover:bg-[#2B2C42] transition-colors"
      >
        {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
      </ButtonComponent>
      {isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-60 z-40 backdrop-blur-sm"
          onClick={closeSidebar}
        />
      )}

      <div
        className={`
          /* Para mobile  */
          fixed md:top-10 left-0 h-full w-[280px] max-w-[85vw]
          transform transition-all duration-300 ease-out
          ${isSidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}
          pt-24 px-6 pb-8 /* Mais espaçamento */
          flex flex-col gap-8 /* espaçamento entre itens */
          overflow-y-auto /* Scroll */
          
          md:relative md:translate-x-0 md:flex md:flex-col 
          md:py-7 md:max-w-52 md:text-sm 
          md:text-white md:gap-7 md:cursor-pointer
          md:h-full md:pt-0 md:px-7 md:pb-7 md:w-auto md:shadow-none
          md:overflow-visible
          
          /* Estilos compartilhados */
          bg-[#1A1724] z-40
        `}
      >
        <Link href="/" onClick={closeSidebar}>
          <ButtonComponent
            className="w-full border-none rounded-lg flex font-normal justify-start items-center shadow-none bg-[#1A1724] hover:bg-[#2B2C42] gap-5 cursor-pointer py-4 px-5 text-lg md:text-base md:py-0 md:px-0 md:rounded-sm"
          >
            <PanelLeft width={24} height={24} className="md:w-5 md:h-5" />
            <span>Painel</span>
          </ButtonComponent>
        </Link>
        
        <Link href="/transactions" onClick={closeSidebar}>
          <ButtonComponent
            className="w-full border-none rounded-lg flex font-normal justify-start items-center shadow-none bg-[#1A1724] hover:bg-[#2B2C42] gap-5 cursor-pointer py-4 px-5 text-lg md:text-base md:py-0 md:px-0 md:rounded-sm"
          >
            <ListIcon width={24} height={24} className="md:w-5 md:h-5" />
            <span>Transações</span>
          </ButtonComponent>
        </Link>
        
        <div className="mt-auto pt-8 md:pt-0 md:mt-96">
          <ButtonComponent 
          onClick={handleLogout}
            className="w-full border-none rounded-lg flex justify-start items-center shadow-none bg-[#1A1724] hover:bg-[#2B2C42] gap-5 cursor-pointer py-4 px-5 text-lg md:text-base md:py-0 md:px-0 md:rounded-sm"
          >
            <LogOutIcon width={24} height={24} className="md:w-5 md:h-5" />
            <span>Sair</span>
          </ButtonComponent>
        </div>
      </div>
    </>
  );
}