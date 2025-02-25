"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  // FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
// import { Switch } from "@/components/ui/switch";

const FormSchema = z.object({
  update_password: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
  billing_emails: z.boolean(),
  messages: z.boolean(),
  reminders: z.boolean(),
  more_activities: z.boolean(),
});

export default function AccountSettings() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      security_emails: true,
    },
  });

  // function onSubmit(data: z.infer<typeof FormSchema>) {
  //   toast({
  //     title: "You submitted the following values:",
  //     description: (
  //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //         <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //       </pre>
  //     ),
  //   });
  // }

  return (
    <Form {...form}>
      <form onSubmit={() => {}} className="w-full space-y-6">
        <div className="flex flex-col border p-3 rounded-lg gap-2">
          <h3 className=" font-semibold">Account Details</h3>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="update_password"
              render={() => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Verify Email Address</FormLabel>
                    <FormDescription>
                      Receive emails about new products, features, and more.
                    </FormDescription>
                  </div>
                  <button
                    type="submit"
                    className="flex justify-center px-12 py-1 rounded-lg bg-green-100 text-green-700 text-sm"
                  >
                    Verified
                  </button>
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="update_password"
              render={() => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Update Password</FormLabel>
                    <FormDescription>
                      Change your password to update & protect your Account.
                    </FormDescription>
                  </div>
                  <button
                    type="submit"
                    className="px-4 text-sm py-1 rounded-lg border text-black"
                  >
                    Change Password
                  </button>
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col p-3 rounded-lg border">
          <h3 className="mb-2  font-semibold">Recovery Settings</h3>
          <div className="space-y-1">
            <FormField
              control={form.control}
              name="messages"
              render={() => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Recovery Email Address</FormLabel>
                    <FormDescription>
                      Setup Recovery Email to Secure your Account.
                    </FormDescription>
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-lg hover:shadow-lg bg-black text-white"
                  >
                    Save
                  </button>
                </FormItem>
              )}
            />
            <h1 className="text-sm text-zinc-700 px-2">
              Another email address
            </h1>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-96 py-2 px-3 rounded-lg"
            />
          </div>

          <div className="mt-2">
            <FormField
              control={form.control}
              name="messages"
              render={() => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Recovery Phone Number</FormLabel>
                    <FormDescription>
                      Add phone number to Setup SMS Recovery for your account.
                    </FormDescription>
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-lg hover:shadow-lg border text-black"
                  >
                    Setup
                  </button>
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="p-3">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="update_password"
              render={() => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Deactivate Account</FormLabel>
                    <FormDescription>
                      This will shut down your account, and it will activate
                      once you Sign In
                    </FormDescription>
                  </div>
                  <button
                    type="submit"
                    className="flex justify-center px-12 py-1 rounded-lg bg-green-100 text-green-700 text-sm"
                  >
                    Verified
                  </button>
                </FormItem>
              )}
            />
          </div>
        </div>
        {/* <button
          type="submit"
          className="px-3 py-2 rounded-lg hover:shadow-lg hover:bg-zinc-500 bg-zinc-700 text-white"
        >
          Save changes
        </button> */}
      </form>
    </Form>
  );
}
