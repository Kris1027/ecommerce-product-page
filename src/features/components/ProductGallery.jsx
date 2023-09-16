function ProductGallery() {
  return (
    <div className='relative h-full'>
      <img
        className='lg:max-w-3xl lg:rounded-2xl cursor-pointer'
        src='../src/assets/image-product-1.jpg'
        alt='product photo nr 1'
      />
      <div className='hidden lg:block'>
        <div className='flex justify-between mt-5'>
          <img
            className='rounded-2xl cursor-pointer hover:opacity-50'
            src='../src/assets/image-product-1-thumbnail.jpg'
            alt='product photo nr 1 thumbnail'
          />
          <img
            className='rounded-2xl cursor-pointer hover:opacity-50'
            src='../src/assets/image-product-2-thumbnail.jpg'
            alt='product photo nr 2 thumbnail'
          />
          <img
            className='rounded-2xl cursor-pointer hover:opacity-50'
            src='../src/assets/image-product-3-thumbnail.jpg'
            alt='product photo nr 3 thumbnail'
          />
          <img
            className='rounded-2xl cursor-pointer hover:opacity-50'
            src='../src/assets/image-product-4-thumbnail.jpg'
            alt='product photo nr 4 thumbnail'
          />
        </div>
      </div>
      <div className='absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full p-4 lg:hidden'>
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
  );
}

export default ProductGallery;
