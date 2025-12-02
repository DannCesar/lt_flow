import UserContainer from "@/app/components/UserContainer";
import { ChartNoAxesCombinedIcon } from "lucide-react";
export function Header() {
  return (
    <header className="  p-6 pt-0 pb-0 cursor-pointer">
      <div className="hidden justify-between md:flex border-b border-[#2B2C42] w-full max-w-[1920px] text-white  items-center">
        <div className="flex gap-3">
          <ChartNoAxesCombinedIcon width={38} height={34} />
          <span className="goudy  text-2xl  ">LTFlow</span>
        </div>
        <div className="p-7 ml-10">
          <UserContainer />
        </div>
      </div>
    </header>
  );
}
