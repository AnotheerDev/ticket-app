import React from "react";
import TicketCard from "./(components)/TicketCard";

const Dashboard = () => {
  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4"></div>
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </div>
  );
};

export default Dashboard;
