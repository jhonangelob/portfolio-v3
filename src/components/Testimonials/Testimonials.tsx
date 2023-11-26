import React from 'react';
import TestimonalsCard from './TestimonalsCard';
import { testimonials } from '@/constants/testimonials';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

type TestimonialsProps = {};

const Testimonials = ({}: TestimonialsProps): React.ReactElement => {
  return (
    <section className='wrapper flex-center my-20'>
      <div className='header-text'>Testimonials</div>
      <div className='flex flex-col md:flex-row gap-8 my-4'>
        <ScrollArea className='w-[1100px]'>
          <div className='flex w-max space-x-4 p-4'>
            {testimonials.map((item, index) => (
              <TestimonalsCard testimonial={item} key={index} />
            ))}
          </div>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
      </div>
    </section>
  );
};

export default Testimonials;
