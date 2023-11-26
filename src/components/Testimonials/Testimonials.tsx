import React from 'react';
import { testimonials } from '@/constants/testimonials';
import Pagination from '../Pagination/Pagination';

type TestimonialsProps = {};

const Testimonials = ({}: TestimonialsProps): React.ReactElement => {
  return (
    <section className='wrapper flex-center my-20' id='testimonials'>
      <div className='header-text-secondary'>Testimonials</div>
      <div className='mb-4 md:mb-8 font-medium text-xs md:text-sm'>
        People say the nicest things.
      </div>
      <Pagination type='testimonials' data={testimonials} max={3} />
    </section>
  );
};

export default Testimonials;
