import Link from 'next/link';
import React from 'react';
import logoImg from '@/assets/logo.png';
import styles from './Mainheader.module.css';
 
function Mainheader() {
  return (
    <div>
      <header className={styles.header}>
        <Link href="/">
          <img src={logoImg.src} alt="A plate with food on it" />
        </Link>
        <nav>
          <ul className={styles.nav}>
            <li>
              <Link href="/meals">Browse Meal</Link>
            </li>
            <li>
              <Link href="/community">Food Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Mainheader;
