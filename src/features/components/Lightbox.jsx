import { useState } from 'react';

function Lightbox({ showOn, handleShowOn }) {
  const [productImage, setProductImage] = useState(1);

  function handleChangeImage(e) {
    setProductImage(Number(e.target.getAttribute('value')));
  }

  function handlePreviousPhoto() {
    if (productImage === 1) {
      setProductImage(4);
    } else {
      setProductImage(productImage - 1);
    }
  }

  function handleNextPhoto() {
    if (productImage === 4) {
      setProductImage(1);
    } else {
      setProductImage(productImage + 1);
    }
  }

  return (
    <div
      className={`${
        showOn ? 'absolute' : 'hidden'
      } top-0 left-0 h-screen w-screen bg-black bg-opacity-80`}
    >
      <div className='max-w-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='flex justify-end pb-6' onClick={handleShowOn}>
          <svg
            className='hover:scale-150 cursor-pointer text-stone-500 hover:text-orange-500'
            width='14'
            height='15'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
              fill='currentColor'
              fillRule='evenodd'
            />
          </svg>
        </div>
        <div className='lg:max-w-3xl lg:rounded-2xl cursor-pointer'>
          <img
            className='rounded-2xl'
            src={`../src/assets/image-product-${productImage}.jpg`}
            alt='product photo nr 1'
          />
        </div>
        <div className='flex justify-between mt-5'>
          <div
            className={`border-4 ${
              productImage === 1 ? 'border-orange-500' : 'border-transparent'
            } rounded-2xl cursor-pointer`}
          >
            <img
              className={`hover:sepia rounded-xl ${
                productImage === 1 ? 'sepia' : ''
              }`}
              src='../src/assets/image-product-1-thumbnail.jpg'
              alt='product photo nr 1 thumbnail'
              value={1}
              onClick={handleChangeImage}
            />
          </div>
          <div
            className={`border-4 ${
              productImage === 2 ? 'border-orange-500' : 'border-transparent'
            } rounded-2xl cursor-pointer`}
          >
            <img
              className={`hover:sepia rounded-xl ${
                productImage === 2 ? 'sepia' : ''
              }`}
              src='../src/assets/image-product-2-thumbnail.jpg'
              alt='product photo nr 2 thumbnail'
              value={2}
              onClick={handleChangeImage}
            />
          </div>
          <div
            className={`border-4 ${
              productImage === 3 ? 'border-orange-500' : 'border-transparent'
            } rounded-2xl cursor-pointer`}
          >
            <img
              className={`hover:sepia rounded-xl ${
                productImage === 3 ? 'sepia' : ''
              }`}
              src='../src/assets/image-product-3-thumbnail.jpg'
              alt='product photo nr 3 thumbnail'
              value={3}
              onClick={handleChangeImage}
            />
          </div>
          <div
            className={`border-4 ${
              productImage === 4 ? 'border-orange-500' : 'border-transparent'
            } rounded-2xl cursor-pointer`}
          >
            <img
              className={`hover:sepia rounded-xl ${
                productImage === 4 ? 'sepia' : ''
              }`}
              src='../src/assets/image-product-4-thumbnail.jpg'
              alt='product photo nr 4 thumbnail'
              value={4}
              onClick={handleChangeImage}
            />
          </div>
        </div>
        <div className='absolute top-1/2 transform -translate-y-28 flex justify-between w-full'>
          <div
            className='flex justify-center items-center bg-white text-black hover:text-orange-500 hover:scale-125 w-10 h-10 rounded-full cursor-pointer -mx-5 active:scale-95'
            onClick={handlePreviousPhoto}
          >
            <svg width='12' height='18' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M11 1 3 9l8 8'
                stroke='currentColor'
                strokeWidth='3'
                fill='none'
                fillRule='evenodd'
              />
            </svg>
          </div>
          <div
            className='flex justify-center items-center bg-white text-black hover:text-orange-500 hover:scale-125 w-10 h-10 rounded-full cursor-pointer -mx-5 active:scale-95'
            onClick={handleNextPhoto}
          >
            <svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='m2 1 8 8-8 8'
                stroke='currentColor'
                strokeWidth='3'
                fill='none'
                fillRule='evenodd'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
