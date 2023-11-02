import { z } from 'zod';

export const formSchema = z.object({
  email: z.string().email({
    message: 'Email address must be valid.',
  }),
  name: z.string().min(3, {
    message: 'Name is required.',
  }),
  message: z.string().min(2, {
    message: 'Message is required.',
  }),
});
