import React from 'react';
import { testimonials } from '@/constants/testimonials';
import Pagination from '../Pagination/Pagination';

type TestimonialsProps = {};

const Testimonials = ({}: TestimonialsProps): React.ReactElement => {
  return (
    <section className='wrapper flex-center my-20'>
      <div className='header-text'>Testimonials</div>
      <Pagination type='testimonials' data={testimonials} max={3} />
    </section>
  );
};

export default Testimonials;
