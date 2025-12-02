import ContentContainer from "@/app/components/ContainerContent";
import DashboardContent from "@/app/components/DashboardContent";

export default function Dashboard() {
  return (
    <div>
      <div className="flex">
        <ContentContainer content={<DashboardContent />} />
      </div>
    </div>
  );
}
