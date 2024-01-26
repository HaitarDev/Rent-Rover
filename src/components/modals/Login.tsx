"use client";

import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import RememberDevice from "./RememberDevice";
import { usePathname, useRouter } from "next/navigation";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type SchemaType = z.infer<typeof schema>;

export default function Login() {
  const pathname = usePathname();
  const router = useRouter();

  // 1. Define my form.
  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: SchemaType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="grid gap-10 items-center  rounded-xl relative">
      <button
        onClick={() => router.push(pathname)}
        className="absolute top-1 right-1 hover:bg-neutral-500/10 rounded-full"
      >
        <ArrowLeft />
      </button>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className=" h-5/6 flex flex-col justify-center md:gap-6 md:px-16 rounded-xl border-none shadow-none">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl md:text-3xl">LOGIN!</CardTitle>
              <CardDescription>
                Welcome back! enter your valid credientials to login ,
              </CardDescription>
              <div className="flex  items-center">
                <p className="leading-7 font-medium  ">New User,</p>
                <Button
                  onClick={() => router.push("/signup")}
                  variant={"link"}
                  className="text-green-700 leading-7"
                >
                  {" "}
                  Please sign up ?
                </Button>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col justify-between gap-4">
              <div className="grid grid-cols-1">
                <Button variant="outline">
                  <FaGoogle className="mr-2 h-4 w-4" />
                  Google
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        // disabled={loading}
                        placeholder="m@.mail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        // disabled={loading}
                        type="password"
                        placeholder="************"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between items-center">
                <RememberDevice />
                <Button variant={"link"} className="text-red-500">
                  Forgot Password ?
                </Button>
              </div>
            </CardContent>

            <CardFooter>
              <Button className="w-full ">Login</Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
}
