function Menu() {
  return (
    <div className='h-full w-2/3 absolute z-30 top-0 -left-full bg-slate-100 p-6 font-bold text-2xl'>
      <img
        src='../src/assets/icon-close.svg'
        alt='close menu icon'
        className='pb-16 cursor-pointer'
      />
      <ul className='flex flex-col gap-y-6'>
        <li className='cursor-pointer hover:text-orange-500'>Collections</li>
        <li className='cursor-pointer hover:text-orange-500'>Men</li>
        <li className='cursor-pointer hover:text-orange-500'>Women</li>
        <li className='cursor-pointer hover:text-orange-500'>About</li>
        <li className='cursor-pointer hover:text-orange-500'>Contact</li>
      </ul>
    </div>
  );
}

export default Menu;
