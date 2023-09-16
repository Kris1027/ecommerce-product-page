import { useProductContext } from '../contexts/prodContext';

function Cart({ isCartOpen }) {
  const { productAmount, setProductAmount } = useProductContext();

  let totalPrice = 125 * productAmount;

  return (
    <div
      className={`${
        isCartOpen ? 'absolute' : 'hidden'
      } top-28 left-3 z-50 bg-white w-[95%] rounded-xl md:w-[70%] md:left-32 lg:left-2/3 lg:w-1/4 shadow-2xl`}
    >
      <h1 className='p-8 font-bold'>Cart</h1>
      <hr />
      {productAmount ? (
        <>
          <div className='p-6'>
            <div className='flex justify-between items-center'>
              <div className='w-20'>
                <img
                  className='rounded-lg'
                  src='../src/assets/image-product-1-thumbnail.jpg'
                  alt=''
                />
              </div>
              <div>
                <h2 className='text-xl text-slate-600'>
                  Fall Limited Edition Sneakers
                </h2>
                <p className='text-slate-500 tracking-wider'>
                  $125.00 x {productAmount}
                  <span className='text-black font-bold pl-2'>
                    ${totalPrice}.00
                  </span>
                </p>
              </div>
              <div
                onClick={() => setProductAmount(0)}
                className='text-slate-500 hover:text-orange-500 cursor-pointer'
              >
                <svg
                  width='14'
                  height='16'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                >
                  <defs>
                    <path
                      d='M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z'
                      id='a'
                    />
                  </defs>
                  <use fill='currentColor' fillRule='nonzero' xlinkHref='#a' />
                </svg>
              </div>
            </div>
            <div className=' pt-6'>
              <button className='w-full mx-auto bg-orange-500 cursor-pointer text-white font-bold p-4 rounded-lg active:scale-90'>
                Checkout
              </button>
            </div>
          </div>
        </>
      ) : (
        <h2 className='text-center text-lg text-slate-500 font-bold py-24'>
          Your cart is empty.
        </h2>
      )}
    </div>
  );
}

export default Cart;
