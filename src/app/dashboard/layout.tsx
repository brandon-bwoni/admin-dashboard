import React from "react";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import Footer from "@/components/dashboard/Footer";

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full flex bg-gray-100">
      <div className="sticky w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[80%] p-5 overflow-y-scroll">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
