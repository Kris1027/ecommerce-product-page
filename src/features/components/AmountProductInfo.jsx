import { useProductContext } from '../contexts/prodContext';

function AmountProductInfo() {
  const { productAmount } = useProductContext();

  return (
    <div className='absolute -top-2 right-7 lg:top-1 lg:right-[3.3rem] bg-orange-500 rounded-lg'>
      <div className='flex items-center justify-center w-6 h-4 text-white font-bold text-xs'>
        {productAmount}
      </div>
    </div>
  );
}

export default AmountProductInfo;
