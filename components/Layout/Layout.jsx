import React from 'react';
import Meta from '../Meta';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = ({ children }) => {
   return (
      <div>
         <Meta />
         <Header />
         {children}
         <Footer />
      </div>
   );
};

export default Layout;
