import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children } : {children : React.ReactNode}) => {
  const { pathname } = useLocation();

  const isLanding = pathname === '/';

  return (
    <div className="min-h-screen relative bg-gray-50 font-sans">
      {!isLanding && (
        <nav className="bg-gray-950 items-end z-50 absolute font-medium sticky top-0 text-white shadow p-4 flex gap-6 justify-end px-5">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/chat">Chat</Link>
        </nav>
      )}
      <main>{children}</main>
    </div>
  );
};

export default Layout;