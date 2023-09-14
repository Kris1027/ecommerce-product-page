import { Link } from 'react-router-dom';
import Menu from './Menu';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <Menu onCloseMenu={handleToggleMenu} isMenuOpen={isMenuOpen} />
      <div className='flex justify-between items-center w-full h-20 px-4'>
        <div className='flex gap-4'>
          <img
            src='../src/assets/icon-menu.svg'
            alt='menu icon'
            className='h-6 cursor-pointer'
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
        <div className='flex gap-4'>
          <img
            src='../src/assets/icon-cart.svg'
            alt='icon of the cart'
            className='h-6 cursor-pointer'
          />
          <img
            src='../src/assets/image-avatar.png'
            alt='profile photo'
            className='h-6 cursor-pointer'
          />
        </div>
      </div>
    </>
  );
}

export default Header;
