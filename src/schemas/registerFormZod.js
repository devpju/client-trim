import { z } from 'zod';

const registerFormSchema = z
  .object({
    fullName: z
      .string()
      .min(2, { message: 'Vui lòng đầy đủ họ và tên' })
      .regex(/^[^\d]*$/, { message: 'Họ và tên không được chứa số' }),
    email: z.string().email({ message: 'Email không hợp lệ' }),
    password: z.string().min(2, { message: 'Mật khẩu tối thiểu 8 ký tự' }),
    confirmPassword: z.string().min(2, { message: 'Mật khẩu tối thiểu 8 ký tự' }),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Passwords don't match",
  });

export default registerFormSchema;
