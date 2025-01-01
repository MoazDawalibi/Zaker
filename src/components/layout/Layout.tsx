import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import BackToTopButton from './BackToTop';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="Layout">
      <NavBar />
      {children}
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Layout;
