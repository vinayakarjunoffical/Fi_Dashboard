"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// -------------------- Schemas --------------------
const passwordLoginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(4, { message: "Password must be at least 4 characters" }),
});

const otpLoginSchema = z.object({
  mobile: z.string()
    .min(10, { message: "Mobile number must be 10 digits" })
    .max(10, { message: "Mobile number must be 10 digits" })
    .regex(/^[0-9]+$/, { message: "Mobile number must contain only digits" }),
  otp: z.string().length(6, { message: "OTP must be 6 digits" }),
});

// -------------------- Demo Credentials --------------------
const DEMO_USERS = {
  password: {
    admin: { email: "admin@example.com", password: "password", role: "admin", redirect: "/dashboard" },
    supervisor: { email: "supervisor@example.com", password: "password", role: "supervisor", redirect: "/olddashboard" },
  },
  otp: {
    admin: { mobile: "9999999999", otp: "123456", role: "admin", redirect: "/dashboard" },
    supervisor: { mobile: "8888888888", otp: "654321", role: "supervisor", redirect: "/olddashboard" },
  },
};

// -------------------- Component --------------------
const LoginForm = () => {
  const router = useRouter();
  const [tab, setTab] = useState("password");
  const [showOtpField, setShowOtpField] = useState(false);
  const [submittedMobile, setSubmittedMobile] = useState("");

  // -------------------- Forms --------------------
  const passwordForm = useForm({
    resolver: zodResolver(passwordLoginSchema),
    defaultValues: { email: "", password: "" },
  });

  const otpForm = useForm({
    resolver: zodResolver(otpLoginSchema),
    defaultValues: { mobile: "", otp: "" },
  });

  // -------------------- Helpers --------------------
  const loginSuccess = (role, redirect) => {
    Cookies.set("token", "demo_token", { expires: 1 });
    Cookies.set("role", role, { expires: 1 });
    toast.success(`${role.charAt(0).toUpperCase() + role.slice(1)} login successful!`);
    router.push(redirect);
  };

  // -------------------- Handlers --------------------
  const handlePasswordLogin = ({ email, password }) => {
    const user = Object.values(DEMO_USERS.password).find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      loginSuccess(user.role, user.redirect);
    } else {
      toast.error("Invalid credentials");
    }
  };

  const handleOtpLogin = ({ mobile, otp }) => {
    const user = Object.values(DEMO_USERS.otp).find(
      (u) => u.mobile === mobile && u.otp === otp
    );

    if (user) {
      loginSuccess(user.role, user.redirect);
    } else {
      toast.error("Invalid OTP or mobile number");
    }
  };

  const sendOtp = () => {
    const mobile = otpForm.getValues("mobile");

    if (!/^\d{10}$/.test(mobile)) {
      toast.error("Enter a valid 10-digit mobile number");
      return;
    }

    const user = Object.values(DEMO_USERS.otp).find((u) => u.mobile === mobile);

    if (!user) {
      toast.error("This mobile number is not registered");
      return;
    }

    toast.success(`OTP sent to ${mobile} (demo: ${user.otp} for ${user.role})`);

    setShowOtpField(false);
    setSubmittedMobile("");
    setTimeout(() => {
      setSubmittedMobile(mobile);
      setShowOtpField(true);
    }, 2000);
  };

  return (
    <div className="flex justify-center w-full p-2">
      <Card className="w-full max-w-md shadow-md border">
        <CardHeader>
          <CardTitle className="text-center font-bold text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={tab} onValueChange={setTab} className="w-full">
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="otp">OTP</TabsTrigger>
              </TabsList>
            </div>

            {/* Password Login */}
            <TabsContent value="password">
              <Form {...passwordForm}>
                <form
                  onSubmit={passwordForm.handleSubmit(handlePasswordLogin)}
                  className="space-y-4"
                >
                  <FormField
                    control={passwordForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={passwordForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={passwordForm.formState.isSubmitting}>
                    {passwordForm.formState.isSubmitting ? "Logging in..." : "Login"}
                  </Button>
                </form>
              </Form>
            </TabsContent>

            {/* OTP Login */}
            <TabsContent value="otp">
              <Form {...otpForm}>
                <form
                  onSubmit={otpForm.handleSubmit(handleOtpLogin)}
                  className="space-y-4"
                >
                  {!submittedMobile && (
                    <FormField
                      control={otpForm.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter 10-digit mobile number" maxLength={10} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {submittedMobile && (
                    <p className="text-sm text-center text-gray-600">
                      OTP sent to <span className="font-semibold">{submittedMobile}</span>
                    </p>
                  )}

                  {!submittedMobile && (
                    <Button type="button" className="w-full" onClick={sendOtp}>
                      Send OTP
                    </Button>
                  )}

                  {showOtpField && (
                    <>
                      <FormField
                        control={otpForm.control}
                        name="otp"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>OTP</FormLabel>
                            <FormControl>
                              <Input placeholder="123456" maxLength={6} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full" disabled={otpForm.formState.isSubmitting}>
                        {otpForm.formState.isSubmitting ? "Verifying..." : "Login with OTP"}
                      </Button>
                    </>
                  )}
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
