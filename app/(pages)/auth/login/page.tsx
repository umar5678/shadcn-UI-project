import { ROUTES } from "@/app/constants/routes";
import { AppLink, Logo } from "@/components/common";
import LoginCard from "@/components/login/login-card/LoginCard";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-4 md:p-0">
      <div className="flex w-full max-w-lg flex-col gap-6 ">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <LoginCard className="" />

        <div>
          <p>Don&apos;t have an account</p>
          <AppLink href={ROUTES.SIGNUP}>Signup now</AppLink>
        </div>
      </div>
    </div>
  );
};

export default page;
