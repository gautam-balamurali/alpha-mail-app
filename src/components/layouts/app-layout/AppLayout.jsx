import AppRoutes from "../../../core/routes/Routes";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="grid-content">
        <Sidebar />
        <AppRoutes />
      </div>
    </>
  );
};

export default AppLayout;
