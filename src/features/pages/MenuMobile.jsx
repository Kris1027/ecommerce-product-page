function Menu({ onCloseMenu, isMenuOpen }) {
  return (
    <div
      className={`${
        isMenuOpen ? ' left-0' : '-left-full'
      } h-full w-2/3 absolute z-30 top-0 bg-slate-100 p-6 transition-all duration-300 ease-linear lg:hidden`}
    >
      <div className='cursor-pointer pb-16' onClick={onCloseMenu}>
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
      <ul className='flex flex-col gap-y-6 font-bold text-2xl'>
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
