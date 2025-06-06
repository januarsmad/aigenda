import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const AuthSchema = z.object({
  email: z.string().email({ message: 'Invalid email format.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
  name: z.string().min(1, { message: 'Name is required.' }),
});

const SignInSchema = AuthSchema.pick({
  email: true,
  password: true,
});

const SignUpSchema = AuthSchema.pick({
  email: true,
  password: true,
  name: true,
});

export type SignInFormType = z.infer<typeof SignInSchema>;
export type SignUpFormType = z.infer<typeof SignUpSchema>;

const SignInPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Sign In</h1>
        <Input />
      </div>
    </div>
  );
};

export default SignInPage;
