import { Outlet } from 'react-router-dom';

import Header from './Header';
import { ProductProvider } from '../contexts/prodContext';

function AppLayout() {
  return (
    <ProductProvider>
      <div className='max-w-screen-2xl mx-auto md:px-20'>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </ProductProvider>
  );
}

export default AppLayout;
