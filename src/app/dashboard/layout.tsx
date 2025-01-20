import Container from "@/components/container";
import DashboardHeader from "@/components/dashboard-hearder";
import SideBar from "@/components/side-bar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-gray-100">
      <Container>
        <section className="grid grid-cols-7">
          <SideBar />
          <div className="col-span-5 h-screen overflow-auto">
            <DashboardHeader />
            {children}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default DashboardLayout;
