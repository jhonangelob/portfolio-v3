'use client';

const Error = (): React.ReactElement => {
  return (
    <div className='w-full flex-center h-[calc(100vh-158px)] flex-col mx-auto gap-2'>
      <h1 className='text-dark text-6xl md:text-9xl font-bold'>500</h1>
      <p className='text-muted-foreground'>Something went wrong.</p>
    </div>
  );
};

export default Error;
