import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css'

const Header = () => {
  return (
     <nav>
        <ul className={styles.navList}>
           <li>
              <Link href='/'>
               <a>Home</a>
              </Link>
           </li>
           <li>
              <Link href='/posts'>
               <a>POSTS</a>
              </Link>
           </li>
           <li>
              <Link href='/about'>
               <a>About</a>
              </Link>
           </li>
           <li>
              <Link href='/'>
               <a>Contact</a>
              </Link>
           </li>
        </ul>
     </nav>
  );
};

export default Header;
