import React from "react";
import style from "./Dashboard.module.scss";
import ApplySections from "./sections/applySection/ApplySection";
import TopSection from "./sections/topSection/TopSection";

function Dashboard() {
  return (
    <div className={style.dashboard}>
      <TopSection />
      <ApplySections />
    </div>
  );
}

export default Dashboard;
