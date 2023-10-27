'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { formSchema } from '@/lib/validations';
import { useToast } from '../ui/use-toast';
import { sendEmail } from '@/lib/email';

type ContactProps = {};

const Contact = ({}: ContactProps): React.ReactElement => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
      message: '',
    },
  });

  const sendRequest = () => {
    console.log('requestResume:unimplemented');
  };

  const sendMessage = async (values: z.infer<typeof formSchema>) => {
    try {
      await sendEmail(values);
      toast({
        title: 'Email Sent!',
        description: 'Thank you for reaching out!',
      });
    } catch (error) {
      toast({
        title: 'Email Sending Failed!',
        description: "Sorry that didn't work out.",
      });
    } finally {
      form.reset();
    }
  };

  return (
    <section className='wrapper flex-center'>
      <div className='header-text'>Contact</div>
      <div className='max-w-3xl w-full flex flex-col md:flex-row gap-8'>
        <div className='flex flex-col w-full md:w-4/6 space-y-4'>
          <div className='font-semibold text-foreground text-xl md:text-2xl'>
            Questions?
          </div>
          <div className='text-sm font-semibold text-accent-red'>
            Leave me a message
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(sendMessage)}
              className='space-y-4'
            >
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder='Your Email Address'
                        className='active:outline-none border-muted-foreground px-3 py-6'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='text-xs font-light text-accent-red' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder='Your Name'
                        className='active:outline-none border-muted-foreground px-3 py-6'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='text-xs font-light text-accent-red' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder='Your Message'
                        className='p-3 border-muted-foreground'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='text-xs font-light text-accent-red' />
                  </FormItem>
                )}
              />
              <Button
                className='flex w-full md:w-3/6 ml-auto bg-accent-red text-foreground hover:bg-background'
                type='submit'
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
        <div className='w-full md:w-2/6 md:mt-12 text-sm text-center md:text-left flex flex-col items-center md:items-start space-y-2'>
          <p className='font-bold text-foreground text-md md:text-2xl'>
            Let&apos;s talk about it.
          </p>
          <p className='text-sm'>
            You can find out more about me on my résumé.
          </p>
          <Button
            variant='ghost'
            size='sm'
            className='text-accent-red font-semibold px-0'
            onClick={sendRequest}
          >
            Request a copy
          </Button>
          <p className='text-xs md:text-sm text-muted-foreground'>
            Calamba, Laguna
          </p>
          <p className='text-xs md:text-sm text-muted-foreground'>
            Philippines
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
