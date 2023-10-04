import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="container m-auto md:px-2 lg:px-10">
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
