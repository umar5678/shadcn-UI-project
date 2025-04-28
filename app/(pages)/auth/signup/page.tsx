import { AppLink, Logo } from "@/components/common";
import React from "react";
import SignupCard from "@/components/signup/signup-card/SignupCard";
import { ROUTES } from "@/app/constants/routes";

const page = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted gap-6 p-4 md:p-0">
      <div className="flex w-full max-w-lg flex-col gap-6 ">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <SignupCard className="" />
        <div>
          <p>Already have an account</p>
          <AppLink href={ROUTES.LOGIN}>Login Now</AppLink>
        </div>
      </div>
    </div>
  );
};

export default page;
