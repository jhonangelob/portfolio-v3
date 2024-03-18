const Loading = (): React.ReactElement => {
  return (
    <div className='page-wrapper flex justify-center items-center bg-background'>
      <div
        className='animate-spin inline-block w-14 h-14 md:w-16 md:h-16 border-[10px] border-accent-red border-t-background rounded-full z-20'
        role='status'
        aria-label='loading'
      />
    </div>
  );
};

export default Loading;
