import { Link } from 'react-router-dom';
import Menu from './Menu';

function Header() {
  return (
    <>
      <Menu />
      <div className='flex justify-between w-full p-4'>
        <div className='flex gap-4'>
          <img
            src='../src/assets/icon-menu.svg'
            alt='menu icon'
            className='h-6 cursor-pointer'
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
