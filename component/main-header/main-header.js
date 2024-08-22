import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logoImg from '@/assets/logo.png';
import styles from './Mainheader.module.css'
import Mainheaderbackground from './main-header-background';
import ImageSlideshow from '../images/ image-slideshow';

function Mainheader() {
  return (
    <div>
      <Mainheaderbackground/>
      <header className={styles.header}>
        <Link href="/">
          <Image
            src={logoImg}
            alt="A plate with food on it"
            height={50} 
            width={50}  
          />
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
