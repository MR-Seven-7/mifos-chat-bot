import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(8).max(50),
});

export default function Login() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="flex justify-center items-center h-full w-full m-0 p-0">
      <Card className="p-10 max-w-[500px] w-full">
        <CardTitle className="my-8">Mifos</CardTitle>
        <Separator className="my-8" />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 flex flex-col"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <a href="#" className="text-right underline text-sm w-full">
              Forgot password?
            </a>
            <Button type="submit">Log In</Button>
          </form>
        </Form>
        <Separator className="my-8" />
        <div className="text-sm w-full text-right">
          <p>
            Don't have an account yet?{" "}
            <a href="#" className="text-right underline text-sm">
              Register
            </a>
          </p>
        </div>
      </Card>
    </div>
  );
}
