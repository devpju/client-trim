import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import loginFormSchema from '@/schemas/loginFormZod';
import GoogleAuthButton from '@/components/auth/GoogleAuthButton';
import NavigationAuthPage from '@/components/auth/NavigationAuthPage';
import LoginForm from '@/components/auth/LoginForm';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (email, password) => {
    setIsLoading(true);
    console.log(email, password);
  };

  return (
    <div className='flex h-dvh w-full items-center justify-center'>
      <div className='flex flex-col gap-10 rounded-lg px-24 pb-8 pt-5 shadow-form'>
        <p className='text-center text-[40px] font-bold text-[#323338]'>Welcome back</p>
        <LoginForm onSubmit={onSubmit} form={form} isLoading={isLoading} />
        <span className='select-none text-center text-[14px] font-medium text-[#c1c2c3]'>or</span>
        <GoogleAuthButton />
        <NavigationAuthPage linkTo='/sign-up' linkText='Sign up' message='Don’t have an account?' />
      </div>
    </div>
  );
};
export default Login;
