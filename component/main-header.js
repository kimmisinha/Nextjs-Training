import Link from 'next/link'
import React from 'react'
import logoImg from "@/assets/logo.png"
function Mainheader() {
  return (
    <div>
        <header>
            <Link href="/">
            <img src={logoImg.src} alt='A plate with food on it'/>
            </Link>
            <nav>
                <li>
                    <Link href="/meals">Brows Meal</Link>
                </li>
                <li>
                    <Link href="/community">Food community</Link>
                </li>
            </nav>
        </header>
    </div>
  )
}

export default Mainheader