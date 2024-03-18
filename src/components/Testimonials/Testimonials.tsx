import React from 'react';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import { Testimonies } from '@/types/testimonials';

type TestimonialsProps = { testimonials: Testimonies };

const Testimonials = ({
  testimonials,
}: TestimonialsProps): React.ReactElement => {
  return (
    <section className='wrapper flex-center my-24' id='testimonials'>
      <div className='header-text-secondary opacity-25'>
        People say the nicest things
      </div>
      <InfiniteMovingCards
        items={testimonials.data}
        direction='right'
        speed='fast'
        pauseOnHover
      />
    </section>
  );
};

export default Testimonials;
