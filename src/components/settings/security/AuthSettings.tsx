"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

const FormSchema = z.object({
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
  billing_emails: z.boolean(),
  messages: z.boolean(),
  reminders: z.boolean(),
  more_activities: z.boolean(),
});

export default function AuthSettings() {
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
        <div className="flex flex-col border p-3 rounded-lg">
          <h3 className="mb-2 text-lg font-medium">
            Two-factor Authentication
          </h3>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="marketing_emails"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Enable Authentication</FormLabel>
                    <FormDescription>
                      Enable Two-factor Authentication to enhance the security
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Pop Notifications</h3>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="messages"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>Messages</FormLabel>
                      <FormDescription>
                        Receive pop up notifications of messages
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
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
