function MenuDesktop() {
  return (
    <div className='hidden lg:block absolute left-1/2 -translate-x-1/2'>
      <ul className='flex h-24 w-full items-center gap-x-6 opacity-50'>
        <li className='cursor-pointer hover:text-orange-500'>Collections</li>
        <li className='cursor-pointer hover:text-orange-500'>Men</li>
        <li className='cursor-pointer hover:text-orange-500'>Women</li>
        <li className='cursor-pointer hover:text-orange-500'>About</li>
        <li className='cursor-pointer hover:text-orange-500'>Contact</li>
      </ul>
    </div>
  );
}

export default MenuDesktop;
