function ProductDescription() {
  return (
    <div className='p-4 flex flex-col gap-y-5'>
      <p className='uppercase text-orange-500 text-xs lg:text-lg font-semibold tracking-widest'>
        sneaker company
      </p>
      <h1 className='text-3xl lg:text-5xl font-bold'>
        Fall Limited Edition Sneakers
      </h1>
      <p className='opacity-50 text-base lg:text-lg'>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they ll withstand everything the
        weather can offer.
      </p>
      <div className='flex justify-between items-center lg:flex-col lg:items-start'>
        <div className='flex gap-x-4 items-center'>
          <span className='text-3xl font-bold'>$125.00</span>
          <span className=' text-orange-500 font-bold bg-orange-100 rounded-lg px-3'>
            50%
          </span>
        </div>
        <span className='font-bold line-through opacity-50 lg:pt-3'>
          $250.00
        </span>
      </div>
      <div className='lg:flex items-center gap-4'>
        <div className='flex justify-between bg-slate-100 text-2xl p-4 rounded-lg font-bold lg:w-2/5'>
          <button className='text-orange-500 cursor-pointer'>-</button>
          <span>0</span>
          <button className='text-orange-500 cursor-pointer'>+</button>
        </div>
        <button className='w-full lg:w-3/5 bg-orange-500 cursor-pointer text-white font-bold p-4 rounded-lg shadow-2xl shadow-orange-500'>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDescription;
