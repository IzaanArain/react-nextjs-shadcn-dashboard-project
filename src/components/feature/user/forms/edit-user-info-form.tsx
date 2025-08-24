"use client";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IUser, USER_TYPE_ENUM } from "@/types";
import { useEffect } from "react";

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters!" })
    .max(50),
  email: z.string().email({ message: "Invalid email address!" }),
  phone: z.string().min(10).max(15),
  location: z.string().min(2),
  role: z.enum([USER_TYPE_ENUM.ADMIN, USER_TYPE_ENUM.USER]),
});
interface IEditUserInfoFormProps {
  user: IUser | undefined;
}

const EditUserInfoForm = ({ user }: IEditUserInfoFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      location: "",
      role: USER_TYPE_ENUM.USER,
    },
  });

  useEffect(() => {
    const username = user?.username || "";
    const email = user?.email || "";
    const phone = user?.phone || "";
    const location = user?.location || "";
    const role = user?.role || USER_TYPE_ENUM.USER;
    form.reset({
      username,
      email,
      phone,
      location,
      role,
    });
  }, [user, form]);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log({ data });
  };

  return (
    <div>
      <Form {...form}>
        <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public username name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormDescription>
                  Only admin can see your email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your phone number" {...field} />
                </FormControl>
                <FormDescription>
                  Only admin can see your phone number.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your location" {...field} />
                </FormControl>
                <FormDescription>This is the public location.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a Role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={USER_TYPE_ENUM.ADMIN}>Admin</SelectItem>
                    <SelectItem value={USER_TYPE_ENUM.USER}>User</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Only verified users can be admin.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default EditUserInfoForm;
