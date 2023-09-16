import { useState } from 'react';

function Lightbox({ showOn }) {
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
      } top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50`}
    >
      <img
        className='lg:max-w-3xl lg:rounded-2xl cursor-pointer'
        src={`../src/assets/image-product-${productImage}.jpg`}
        alt='product photo nr 1'
      />
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
          className='flex justify-center items-center bg-white w-10 h-10 rounded-full cursor-pointer'
          onClick={handlePreviousPhoto}
        >
          <img
            src='../src/assets/icon-previous.svg'
            alt='icon of previous slide'
          />
        </div>
        <div
          className='flex justify-center items-center bg-white w-10 h-10 rounded-full cursor-pointer'
          onClick={handleNextPhoto}
        >
          <img src='../src/assets/icon-next.svg' alt='icon of next slide' />
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
