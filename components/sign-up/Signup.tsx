'use client';
import Image from 'next/image';
import z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';

const signupFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'Username must be at least 2 characters' })
    .max(20, { message: 'Username cannot be more than 20 characters' }),
  email: z.email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(4, { message: 'Password must be at least 4 characters' })
    .max(20, { message: 'Password cannot be more than 20 characters' }),
});

type SignupFormSchema = z.infer<typeof signupFormSchema>;
const onSubmit = () => {};

export function Signup() {
  const form = useForm<SignupFormSchema>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          name="username"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
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
                <Input type="email" placeholder="" {...field} />
              </FormControl>
              {/* <FormDescription>This is your email address.</FormDescription> */}
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
                <Input type="password" placeholder="" {...field} />
              </FormControl>
              {/* <FormDescription>This is your password.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <div className="flex justify-center"> */}
        <Button type="submit" className="w-full">
          Submit
        </Button>
        {/* </div> */}
      </form>
    </Form>
  );
}
