import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import ScrollToHash from './ScrollToHash';

const RootLayout = () => {
    return (
         // full viewport, flex column
    <div className="min-h-[100svh] flex flex-col bg-base-100 text-base-content">
      <ScrollToHash />
      <NavBar />

      {/* main should flex to fill the space */}
      <main className="container mx-auto flex-1 w-full px-4 py-8">
        <Outlet />
      </main>

      {/* footer sits at the bottom because main is flex-1 */}
      <Footer />
    </div>
    );
};

export default RootLayout;