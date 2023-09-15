import { Outlet } from 'react-router-dom';

import Header from './Header';

function AppLayout() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
