import React from 'react';
import { Card, CardContent, CardFooter } from '../ui/card';

import { RxQuote } from 'react-icons/rx';
import { Testimony } from '@/types/testimonials';

type TestimonalCardProps = { testimonial: Testimony };

const TestimonalsCard = ({
  testimonial,
}: TestimonalCardProps): React.ReactElement => {
  return (
    <Card className='w-[350px] bg-transparent py-8 flex flex-col justify-center'>
      <CardContent className='flex flex-row text-sm'>
        <RxQuote className='rotate-180 w-1/5 text-accent-red' />
        <p className='text-center'>{testimonial.message}</p>
        <RxQuote className='w-1/5 mt-auto text-accent-red' />
      </CardContent>
      <CardFooter className='flex flex-row gap-2 flex-wrap justify-center text-xs md:text-sm pb-0 text-muted-foreground'>
        <span className='text-foreground italic font-semibold text-xl'>
          {testimonial.name}
        </span>
        {testimonial.company.position} at {testimonial.company.name}
      </CardFooter>
    </Card>
  );
};

export default TestimonalsCard;
