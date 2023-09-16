function Cart({ isCartOpen }) {
  return (
    <div
      className={`${
        isCartOpen ? 'absolute' : 'hidden'
      } top-28 left-3 z-50 bg-white w-[95%] rounded-xl md:w-[70%] md:left-32 lg:left-2/3 lg:w-1/4 shadow-2xl`}
    >
      <h1 className='p-8 font-bold'>Cart</h1>
      <hr />
      <div>
        <h2 className='p-32 lg:p-24 text-center font-bold text-stone-500'>
          Your cart is Empty
        </h2>
      </div>
    </div>
  );
}

export default Cart;
