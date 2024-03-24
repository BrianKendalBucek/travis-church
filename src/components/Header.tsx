import React from "react";
import Link from "next/link";
// FIX
// import styles from "../styles/Header.module.scss";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // Combine the provided className with the default 'header' class from the module
  // const headerClass = className ? `${styles.header} ${className}` : styles.header;
  const headerClass = className ? `header ${className}` : 'header';


  // return (
  //   <header className={headerClass}>
  //     <nav className={styles.navbar}>
  //       <ul className={styles.navList}>
  //         <li className={styles.navItem}>
  //           <Link href="/">Home</Link>
  //         </li>
  //         <li className={styles.navItem}>
  //           <Link href="/about">About</Link>
  //         </li>
  //       </ul>
  //     </nav>
  //   </header>
  // );
  return (
    <header className={headerClass}>
      <nav className='navbar'>
        <ul className='navList'>
          <li className='navItem'>
            <Link href="/">Home</Link>
          </li>
          <li className='navItem'>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
