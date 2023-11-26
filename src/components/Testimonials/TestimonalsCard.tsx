import React from 'react';
import { Card, CardContent, CardFooter } from '../ui/card';

import { RxQuote } from 'react-icons/rx';
import { Testimonial } from '@/types/testimonials';

type TestimonalCardProps = { testimonial: Testimonial };

const TestimonalsCard = ({
  testimonial,
}: TestimonalCardProps): React.ReactElement => {
  return (
    <Card className='w-[350px] bg-transparent py-8 flex flex-col justify-center'>
      <CardContent className='flex flex-row text-sm'>
        <RxQuote className='rotate-180 w-1/5' />
        <p className='text-center'>{testimonial.message}</p>
        <RxQuote className='w-1/5 mt-auto' />
      </CardContent>
      <CardFooter className='flex flex-row gap-2 flex-wrap justify-center text-sm pb-0 text-muted-foreground'>
        <span className='text-accent-red font-semibold text-xl'>
          {testimonial.name}
        </span>
        {testimonial.company.position} at {testimonial.company.name}
      </CardFooter>
    </Card>
  );
};

export default TestimonalsCard;
