import UserContainer from "@/app/components/UserContainer";
import { ChartNoAxesCombinedIcon } from "lucide-react";
export function Header() {
  return (
    <header className="p-7 pt-5 pb-5 cursor-pointer">
      <div className="hidden md:flex border-b border-[#2B2C42] w-full text-white  gap-3 items-center">
        <ChartNoAxesCombinedIcon width={38} height={34} />
        <span className="goudy  text-2xl  ">LTFlow</span>
     <div className="p-7 ml-10">
         <UserContainer/>
     </div>
      </div>
    </header>
  );
}
