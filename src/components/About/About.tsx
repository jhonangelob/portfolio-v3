import React from 'react';
import Image from 'next/image';

type AboutProps = {};

const About = ({}: AboutProps): React.ReactElement => {
  return (
    <section className='wrapper'>
      <div className='header-text-secondary'>About</div>
      <div className='w-full flex flex-col md:flex-row space-x-12'>
        <div className='w-full text-justify md:text-left md:w-4/6 text-sm md:text-base text-secondary-foreground'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          atque facilis incidunt temporibus amet quasi nobis facere cum
          recusandae deleniti aliquid laudantium iste, omnis repellendus in
          reiciendis autem distinctio modi. Atque, ullam reiciendis cumque,
          alias facere similique accusantium deleniti eos in nostrum temporibus
          earum optio, maiores voluptas nam repellat error officiis id! Dicta
          autem facere asperiores dolorem! Earum, sint omnis. Fugiat ipsum
          adipisci sunt inventore illo, recusandae, nulla perspiciatis quis
          quasi molestiae, assumenda iusto nesciunt eveniet aut excepturi
          pariatur ab non repellendus odio provident molestias veritatis hic!
        </div>
        <div className='w-full md:w-2/6'>
          <div className='relative hidden md:block w-60 h-72'>
            <Image src='/assets/images/avatar.svg' alt='profile' fill={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
