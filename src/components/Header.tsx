import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.scss";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // Combine the provided className with the default 'header' class from the module
  const headerClass = className ? `${styles.header} ${className}` : styles.header;

  return (
    <header className={headerClass}>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link> {/* Apply styles to <a>, not to Link */}
          </li>
          <li className={styles.navItem}>
            <Link href="/about">About</Link> {/* Apply styles to <a>, not to Link */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
