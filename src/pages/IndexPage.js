
import  HeaderDashboard from "../components/Dash/HeaderDashboard";
import  SegmentTable  from  "../components/Dash/SegmentTable";

 
function Index() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderDashboard/>
      <main>
        <SegmentTable />
      </main>
    </div>
  );
}
export default Index;