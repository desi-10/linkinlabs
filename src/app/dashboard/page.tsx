import { Ambulance, CheckCircle, List, Timer } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <section>
      <div className="p-5 rounded-lg shadow-lg pt-7">
        <h1>Your Dashboard</h1>
        <hr className="my-5" />

        <div className="grid grid-cols-4 gap-5">
          <div className="border p-5 rounded-lg text-center space-y-2 bg-blue-400 text-white">
            <p>Total Requests</p>
            <List className="mx-auto" />
            <hr className="my-3" />
            <p>0</p>
          </div>
          <div className="border p-5 rounded-lg text-center space-y-2 bg-blue-400 text-white">
            <p>Submitted / Pending Request</p>
            <Timer className="mx-auto" />
            <hr className="my-3" />
            <p>0</p>
          </div>
          <div className="border p-5 rounded-lg text-center space-y-2 bg-blue-400 text-white">
            <p>Samples Dispatched</p>
            <Ambulance className="mx-auto" />
            <hr className="my-3" />
            <p>0</p>
          </div>
          <div className="border p-5 rounded-lg text-center space-y-2 bg-blue-400 text-white">
            <p>Completed Requests</p>
            <CheckCircle className="mx-auto" />
            <hr className="my-3" />
            <p>0</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
