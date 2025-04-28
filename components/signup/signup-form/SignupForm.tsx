"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";

// zod Schema for signup form
const ZSignupSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Name meust be at least 3 characters" }),
  email: z.string().email({ message: "Please enter a valid Email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      }
    ),
});

// types for form data
type TSignupFormData = z.infer<typeof ZSignupSchema>;

const SignupForm = () => {
  // create form from useForm hook
  const form = useForm({
    resolver: zodResolver(ZSignupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  // form submit to api handler

  const onSubmit: SubmitHandler<TSignupFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log("Signup form Data: ", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          name="fullName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          {form.formState.isSubmitting ? "Creating Account" : "Signup"}
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
