import Header from "@/common/header/Header";
import Login from "@/components/auth/login/Login";
import Head from "next/head";
import React from "react";

function index() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header/>
      <Login />
    </>
  );
}

export default index;
