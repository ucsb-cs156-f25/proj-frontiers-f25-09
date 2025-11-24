import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import { useNavigate } from "react-router";
import React from "react";

export default function SignInSuccessPage() {
  const storedReturn = sessionStorage.getItem("redirect");

  const navigation = useNavigate();
  if (storedReturn) {
    navigation(storedReturn);
  } else {
    navigation("/");
  }

  return (
    <BasicLayout>
      <h1>Redirecting...</h1>
    </BasicLayout>
  );
}
