import { cn } from "@/lib/utils";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import SignupForm from "../signup-form/SignupForm";

const SignupCard = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn("flex flex-col gap-6 max-w-lg", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Welcome to the Project</CardTitle>
          <CardDescription>
            Continue to the Shadcn Project. UI Displayed!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupCard;
