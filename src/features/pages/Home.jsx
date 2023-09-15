import ProductDescription from '../components/ProductDescription';
import ProductGallery from '../components/ProductGallery';

function Home() {
  return (
    <div className='lg:px-24 lg:flex lg:flex-row lg:gap-x-20 lg:items-center'>
      <ProductGallery />
      <ProductDescription />
    </div>
  );
}

export default Home;
