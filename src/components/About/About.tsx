import React from 'react';
import Image from 'next/image';

type AboutProps = {};

const About = ({}: AboutProps): React.ReactElement => {
  return (
    <section className='wrapper my-20 md:my-40'>
      <div className='header-text-secondary'>About</div>
      <div className='w-full flex flex-col md:flex-row space-x-12'>
        <div className='w-full flex flex-col gap-y-4 text-justify md:text-left md:w-4/6 text-sm md:text-base text-secondary-foreground'>
          <div>
            Hello! I&apos;m Jhon Angelo Bustarde, a recent graduate with a
            Bachelor&apos;s degree in Information Technology from the
            Polytechnic University of the Philippines Sto. Tomas branch.
          </div>
          <div>
            My academic background has equipped me with a solid foundation in IT
            principles and practices. Presently, my professional focus lies in
            the dynamic field of Web Development, where I actively engage with
            technologies such as React, Node, and AWS services.
          </div>
          <div>
            I am passionate about leveraging these tools to create innovative
            and efficient solutions that contribute to the ever-evolving
            landscape of web applications.
          </div>
        </div>
        <div className='w-full md:w-2/6'>
          <div className='relative hidden md:block w-60 h-72'>
            <Image src='/assets/images/avatar.svg' alt='profile' fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
