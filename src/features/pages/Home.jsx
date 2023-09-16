import { useState } from 'react';
import ProductDescription from '../components/ProductDescription';
import ProductGallery from '../components/ProductGallery';
import Lightbox from '../components/Lightbox';

function Home() {
  const [showOn, setShowOn] = useState(false);

  function handleShowOn() {
    setShowOn(!showOn);
  }

  return (
    <div className='lg:px-24 lg:flex lg:flex-row lg:gap-x-20 lg:items-center'>
      <ProductGallery handleShowOn={handleShowOn} />
      <ProductDescription />
      <Lightbox showOn={showOn} />
    </div>
  );
}

export default Home;
