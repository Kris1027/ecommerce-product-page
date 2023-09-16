import { useProductContext } from '../contexts/prodContext';

function ProductDescription() {
  const { productAmount, handleDecreaseAmount, handleIncreaseAmount } =
    useProductContext();

  return (
    <div className='p-8 flex flex-col gap-y-5'>
      <p className='uppercase text-orange-500 text-xs lg:text-lg font-semibold tracking-widest'>
        sneaker company
      </p>
      <h1 className='text-4xl lg:text-5xl font-bold'>
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
      <div className='lg:flex lg:flex-row flex flex-col items-center gap-4'>
        <div className='flex items-center justify-between w-full lg:w-2/5 bg-slate-100 p-4 rounded-lg'>
          <div
            onClick={handleDecreaseAmount}
            className='cursor-pointer hover:scale-150 active:scale-90'
          >
            <svg
              width='12'
              height='4'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <defs>
                <path
                  d='M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z'
                  id='a'
                />
              </defs>
              <use fill='#FF7E1B' fillRule='nonzero' xlinkHref='#a' />
            </svg>
          </div>
          <div className='font-bold'>
            <span>{productAmount}</span>
          </div>
          <div
            onClick={handleIncreaseAmount}
            className='cursor-pointer hover:scale-150 active:scale-90'
          >
            <svg
              width='12'
              height='12'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <defs>
                <path
                  d='M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z'
                  id='b'
                />
              </defs>
              <use fill='#FF7E1B' fillRule='nonzero' xlinkHref='#b' />
            </svg>
          </div>
        </div>
        <button className='w-full lg:w-3/5 bg-orange-500 cursor-pointer text-white font-bold p-4 rounded-lg shadow-2xl shadow-orange-500 active:scale-90'>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDescription;
