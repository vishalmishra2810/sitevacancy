import { URLPaths } from "@/utils/constant";
import { useRouter } from "next/router";
import React from "react";
import style from "./ConnectUs.module.scss";

function ConnectUs() {
  const router = useRouter();
  return (
    <div className={style.connectUs}>
      <div className={style.connectUs__bubble_top}></div>
      <div className={style.connectUs_container}>
        <h2 className={style.title}>
          Let{"'s"} get connected and start <br />
          finding your dream job
        </h2>
        <p className={style.description}>
          Your dream job is waiting for you. Take the first step to reach it.
        </p>
        <div
          className={style.connectUs__btn}
          onClick={() => router.push(URLPaths.REGISTER)}
        >
          Sign Up
        </div>
      </div>
      <div className={style.connectUs__bubble_bottom}></div>
    </div>
  );
}

export default ConnectUs;
