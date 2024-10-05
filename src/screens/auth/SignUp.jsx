import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Eye, EyeOff, LoaderCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import handleAPI from '@/apis/handleAPI';
import { toast } from 'sonner';

const formSchema = z
  .object({
    fullName: z
      .string()
      .min(10, { message: 'Nhập đầy đủ họ và tên' })
      .transform(value => value.trim()) // Loại bỏ khoảng trắng
      .regex(/^[^\d]*$/, { message: 'Họ và tên không được chứa số' }), // Không cho phép số
    email: z.string().email({ message: 'Địa chỉ email không hợp lệ' }),
    password: z.string().min(8, { message: 'Mật khẩu phải có ít nhất 8 ký tự' }),
    confirmPassword: z.string().min(8, { message: 'Mật khẩu phải có ít nhất 8 ký tự' }),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Mật khẩu không khớp',
  });

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = async values => {
    const api = '/auth/register';
    const { fullName, email, password } = values;

    try {
      setIsLoading(true);
      const res = await handleAPI(api, { fullName, email, password }, 'post');
      toast.success('Đăng ký thành công!');
      console.log(res.data);
      navigate('/');
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
        <Form {...form}>
          <form
            className='flex w-full flex-col gap-[34px] lg:w-[532px]'
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name='fullName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='form-label'>Họ và tên</FormLabel>
                  <FormControl>
                    <Input type='text' {...field} className='text-[14px] text-[#323338]' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='form-label'>Email address</FormLabel>
                  <FormControl>
                    <Input type='email' {...field} className='text-[14px] text-[#323338]' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <div className='flex items-center justify-between'>
                    <FormLabel className='form-label'>Password</FormLabel>
                    <Button
                      className='flex h-3 items-center gap-1 p-0 text-sm'
                      variant='ghost'
                      type='button'
                      onClick={handleShowPassword}
                    >
                      {showPassword ? (
                        <div className='flex items-center gap-1'>
                          Hide
                          <Eye className='size-4 cursor-pointer text-gray-400' />
                        </div>
                      ) : (
                        <div className='flex items-center gap-1'>
                          Show
                          <EyeOff className='size-4 cursor-pointer text-gray-500' />
                        </div>
                      )}
                    </Button>
                  </div>
                  <FormControl>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      {...field}
                      className='text-[14px]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='form-label'>Confirm password</FormLabel>
                  <FormControl>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      {...field}
                      className='text-[14px]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className='bg-[#5F48EA] hover:bg-[#5F48EA] hover:opacity-90'>
              {isLoading && <LoaderCircle className='mr-2 animate-spin' />}Sign up
            </Button>
          </form>
        </Form>
        <span className='select-none text-center text-[14px] font-medium text-[#c1c2c3]'>or</span>
        <Button variant='ghost' className='flex items-center gap-3'>
          <img src='/icons/google.svg' alt='Google' />
          Continue with Google
        </Button>
        <span className='flex flex-wrap justify-center gap-2 text-[14px] text-[#46474C]'>
          Already have an account?
          <Link className='font-medium text-[#08C7E0]' to={'/'}>
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
};
export default SignUp;
