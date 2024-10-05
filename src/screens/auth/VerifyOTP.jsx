import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Slot } from '@radix-ui/react-slot';
import { OTPInput, REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';

const VerifyOTP = () => {
  return (
    <div className='flex h-dvh w-full items-center justify-center'>
      <div className='flex min-w-[512px] flex-col items-center rounded-lg px-24 pb-8 pt-5 shadow-form'>
        <p className='text-center text-[40px] font-bold text-[#323338]'>Mã xác minh</p>
        <img src='/icons/mail.svg' alt='' className='mt-10 w-[40%]' />
        <p className='mt-6 text-sm text-gray-400'>Chúng tôi đã gửi mã xác minh tới email của bạn</p>
        <p className='mb-10 mt-3 font-medium'>hellouihut@gmail.com</p>
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
          <InputOTPGroup>
            <InputOTPSlot className='size-14 border-gray-500 text-2xl font-bold' index={0} />
            <InputOTPSlot className='size-14 border-gray-500 text-2xl font-bold' index={1} />
            <InputOTPSlot className='size-14 border-gray-500 text-2xl font-bold' index={2} />
            <InputOTPSlot className='size-14 border-gray-500 text-2xl font-bold' index={3} />
            <InputOTPSlot className='size-14 border-gray-500 text-2xl font-bold' index={4} />
            <InputOTPSlot className='size-14 border-gray-500 text-2xl font-bold' index={5} />
          </InputOTPGroup>
        </InputOTP>
        <Button className='mt-10 w-full bg-[#5F48EA] hover:bg-[#5F48EA] hover:opacity-90'>
          Xác minh
        </Button>
        <Button variant='ghost' className='mt-4 text-[#5F48EA]'>
          Gửi lại mã
        </Button>
      </div>
    </div>
  );
};
export default VerifyOTP;
