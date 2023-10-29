import Header from "@/common/header/Header";
import CompanyList from "@/components/company/CompanyList";
import React from "react";

function company() {
  return (
    <div className="remove-scrollBar flex flex-col w-full h-[100vh] bg-secondaryWhite">
      <Header />
      <CompanyList />
    </div>
  );
}

export default company;
