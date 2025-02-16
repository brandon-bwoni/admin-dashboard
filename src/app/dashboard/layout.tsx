import React from "react";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import Footer from "@/components/dashboard/Footer";

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full h-full  flex bg-zinc-100">
      <div className="w-[20%] h-full overflow-y-auto sticky top-0 bg-white shadow-lg">
        <Sidebar />
      </div>
      <div className="w-[80%] h-full p-3 overflow-y-scroll">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
