import React from "react";
import BasicLayout from "main/layouts/BasicLayout/BasicLayout";

import { FaMicrosoft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Row } from "react-bootstrap";
import SignInCard from "main/components/Auth/SignInCard";
import { useSystemInfo } from "main/utils/systemInfo";
import loginProviderSchools from "main/utils/loginProviderSchools";
import React from "react";

import SignInContent from "main/pages/Auth/SignInContent";


export default function SignInPage() {
  return (
    <BasicLayout>
      <SignInContent />
    </BasicLayout>
  );
}
