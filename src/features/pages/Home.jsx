import ProductDescription from '../components/ProductDescription';
import ProductGallery from '../components/ProductGallery';
import Lightbox from '../components/Lightbox';
import { useState } from 'react';

function Home() {
  const [showOn, setShowOn] = useState(false);

  function handleShowOn() {
    setShowOn(!showOn);
  }

  return (
    <div className='lg:px-24 lg:flex md:flex-col lg:flex-row lg:gap-x-20 lg:items-center'>
      <ProductGallery handleShowOn={handleShowOn} />
      <ProductDescription />
      <Lightbox showOn={showOn} handleShowOn={handleShowOn} />
    </div>
  );
}

export default Home;
