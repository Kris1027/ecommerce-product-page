function Home() {
  return (
    <div>
      <div className='relative h-full'>
        <img src='../src/assets/image-product-1.jpg' alt='product photo nr 1' />
        <div className='absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full p-4'>
          <div className='flex justify-center items-center bg-white w-10 h-10 rounded-full cursor-pointer'>
            <img
              src='../src/assets/icon-previous.svg'
              alt='icon of previous slide'
            />
          </div>
          <div className='flex justify-center items-center bg-white w-10 h-10 rounded-full cursor-pointer'>
            <img src='../src/assets/icon-next.svg' alt='icon of next slide' />
          </div>
        </div>
      </div>
      <div className='p-4 flex flex-col gap-y-5'>
        <p className='uppercase text-orange-500 text-xs font-semibold tracking-widest'>
          sneaker company
        </p>
        <h1 className='text-3xl font-bold'>Fall Limited Edition Sneakers</h1>
        <p className='opacity-50 text-base'>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they ll withstand everything
          the weather can offer.
        </p>
        <div className='flex justify-between items-center'>
          <div className='flex gap-x-4 items-center'>
            <span className='text-3xl font-bold'>$125.00</span>
            <span className=' text-orange-500 font-bold bg-orange-100 rounded-lg px-3'>
              50%
            </span>
          </div>
          <span className='font-bold line-through opacity-50'>$250.00</span>
        </div>
        <div className='flex justify-between bg-slate-200 text-2xl p-4 rounded-lg font-bold'>
          <button className='text-orange-500 cursor-pointer'>-</button>
          <span>0</span>
          <button className='text-orange-500 cursor-pointer'>+</button>
        </div>
        <button className='w-full bg-orange-500 cursor-pointer text-white font-bold p-4 rounded-lg'>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Home;
