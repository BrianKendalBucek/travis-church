import React from "react";
import Link from "next/link";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {

  const headerClass = className ? `header ${className}` : 'header';

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
