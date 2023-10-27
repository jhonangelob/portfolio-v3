import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail = ({ name, email, message }: ContactEmailProps) => (
  <Tailwind
    config={{
      theme: {
        extend: {
          colors: {
            emailBackground: '#1A1A1A',
            accent: '#FF0048',
            primary: '#AAAAAA',
          },
        },
      },
    }}
  >
    <Html>
      <Head />
      <Preview>Message from {name}</Preview>
      <Body className='bg-emailBackground my-auto'>
        <Container className='my-auto px-5 pt-24 pb-16'>
          <Heading className='text-accent text-4xl italic font-bold mx-auto mb-5'>
            jhn
          </Heading>
          <Text className='text-primary text-sm text mb-5'>{name} wrote:</Text>
          <Text className='text-primary text-sm text mb-5'>{message}</Text>
          <Text className='text-primary text-sm text mb-5'>
            reply to: {email}
          </Text>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);
