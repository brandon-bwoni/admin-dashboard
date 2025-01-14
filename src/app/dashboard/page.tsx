import React from "react";
import Card from "@/components/dashboard/Card";
import Rightbar from "@/components/dashboard/Rightbar";
import Transactions from "@/components/dashboard/Transactions";
import Chart from "@/components/dashboard/Chart";

const Dashboard = () => {
  return (
    <div className="flex gap-5 mt-[20px]">
      <div className="flex-3 flex flex-col gap-5">
        <div className="flex gap-5 justify-between">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="flex-1">
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
