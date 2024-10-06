import { useState } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '../ui/button';
import SubmitButton from './SubmitButton';

const RegisterForm = ({ form, onSubmit, isLoading }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
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
        <SubmitButton isLoading={isLoading} type='Sign up' />
      </form>
    </Form>
  );
};
export default RegisterForm;
