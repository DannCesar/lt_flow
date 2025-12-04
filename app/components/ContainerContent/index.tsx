import Sidebar from "@/app/components/Sidebar";
import { Header } from "../Header";

interface IContainerContent {
  content: React.ReactNode;
}

export default function ContainerContent({ content }: IContainerContent) {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="border-l border-[#2B2C42] p-5">{content}</div>
      </div>
    </div>
  );
}
