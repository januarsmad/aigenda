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
import { betterAuth } from '@/lib/betterAuth';

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

const useAuth = () => {
  const signInForm = useForm<SignInFormType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const signUpForm = useForm<SignUpFormType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });

  const onSubmitSignIn = () => {};

  const onSubmitSignUp = async () => {
    const { email, password, name } = signUpForm.getValues();
    const { signUp } = betterAuth;
    await signUp.email(
      {
        name: 'wodexa',
        email: 'januarsmad@gmail.com',
        password: 'masuk12345',
      },
      {
        onSuccess: () => {
          console.log('Sign up successful');
        },
      }
    );
  };

  return { signInForm, signUpForm, onSubmitSignUp };
};

export default useAuth;
