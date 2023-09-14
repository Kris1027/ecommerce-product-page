function Menu({ onCloseMenu, isMenuOpen }) {
  return (
    <div
      className={`${
        isMenuOpen ? ' left-0' : '-left-full'
      } h-full w-2/3 absolute z-30 top-0 bg-slate-100 p-6 font-bold text-2xl transition-all duration-300 ease-linear`}
    >
      <img
        src='../src/assets/icon-close.svg'
        alt='close menu icon'
        className='pb-16 cursor-pointer'
        onClick={onCloseMenu}
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
