import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import RegisterForm from '@/components/auth/registerForm';
import handleAPI from '@/apis/handleAPI';
import { addAuth } from '@/redux/reducers/authReducer';
import registerFormSchema from '@/schemas/registerFormZod';
import GoogleAuthButton from '@/components/auth/GoogleAuthButton';
import NavigationAuthPage from '@/components/auth/NavigationAuthPage';

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async values => {
    const api = '/auth/register';
    const { fullName, email, password } = values;

    try {
      setIsLoading(true);

      const res = await handleAPI(api, { fullName, email, password }, 'post');

      dispatch(addAuth(res.data));

      toast.success('Đăng ký thành công!');
      navigate('/verify');
    } catch (error) {
      toast.error(error?.message || 'Đã xảy ra lỗi khi đăng ký');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex h-dvh w-full items-center justify-center'>
      <div className='flex flex-col gap-10 rounded-lg px-24 pb-8 pt-5 shadow-form'>
        <p className='text-center text-[40px] font-bold text-[#323338]'>Sign up</p>
        <RegisterForm onSubmit={onSubmit} form={form} isLoading={isLoading} />
        <span className='select-none text-center text-[14px] font-medium text-[#c1c2c3]'>or</span>
        <GoogleAuthButton />
        <NavigationAuthPage linkTo='/' linkText='Sign in' message='Already have an account?' />
      </div>
    </div>
  );
};
export default SignUp;
