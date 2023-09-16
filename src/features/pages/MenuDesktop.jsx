function MenuDesktop() {
  return (
    <div className='hidden lg:block absolute left-1/2 -translate-x-1/2'>
      <ul className='flex h-24 w-full items-center gap-x-6 text-stone-400'>
        <li className='cursor-pointer hover:border-b-4 hover:text-stone-950 border-orange-500 h-full flex items-center active:scale-90'>
          Collections
        </li>
        <li className='cursor-pointer hover:border-b-4 hover:text-stone-950 border-orange-500 h-full flex items-center active:scale-90'>
          Men
        </li>
        <li className='cursor-pointer hover:border-b-4 hover:text-stone-950 border-orange-500 h-full flex items-center active:scale-90'>
          Women
        </li>
        <li className='cursor-pointer hover:border-b-4 hover:text-stone-950 border-orange-500 h-full flex items-center active:scale-90'>
          About
        </li>
        <li className='cursor-pointer hover:border-b-4 hover:text-stone-950 border-orange-500 h-full flex items-center active:scale-90'>
          Contact
        </li>
      </ul>
    </div>
  );
}

export default MenuDesktop;
