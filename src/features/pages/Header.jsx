import { Link } from 'react-router-dom';
import MenuMobile from './MenuMobile';
import { useState } from 'react';
import MenuDesktop from './MenuDesktop';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <MenuMobile onCloseMenu={handleToggleMenu} isMenuOpen={isMenuOpen} />
      <MenuDesktop />
      <div className='flex justify-between items-center w-full h-24 px-4 lg:px-24'>
        <div className='flex gap-4'>
          <img
            src='../src/assets/icon-menu.svg'
            alt='menu icon'
            className='h-6 cursor-pointer lg:hidden'
            onClick={handleToggleMenu}
          />
          <Link to='/'>
            <img
              src='../src/assets/logo.svg'
              alt='logo of the shop'
              className='h-6 cursor-pointer'
            />
          </Link>
        </div>
        <div className='flex gap-4 items-center'>
          <img
            src='../src/assets/icon-cart.svg'
            alt='icon of the cart'
            className='h-6 cursor-pointer'
          />
          <img
            src='../src/assets/image-avatar.png'
            alt='profile photo'
            className='h-6 lg:h-12 cursor-pointer'
          />
        </div>
      </div>
      <hr className='lg:pb-16' />
    </>
  );
}

export default Header;
