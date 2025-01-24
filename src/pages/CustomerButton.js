import  CustomerList  from "../components/Dash/CustomerList";
import HeaderDashboard from "../components/Dash/HeaderDashboard";

export default function CustomerButton() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderDashboard />
      <main>
        <CustomerList />
      </main>
    </div>
  );
}