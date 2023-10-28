import { useRouter } from "next/router";
import React from "react";

function Header() {
  const router = useRouter();
  const goToHomePage = () => {
    router.push("/");
  };

  return (
    <header className="flex px-[32px] py-[16px] items-center">
      <div className="cursor-pointer font-bold text-[32px] font-OpenSans"
      onClick={goToHomePage}>
        Site
        <span className="text-primaryRed">
          Vacancy</span>
      </div>
    </header>
  );
}

export default Header;
