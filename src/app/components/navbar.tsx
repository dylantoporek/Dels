'use client'
import Link from "next/link";
import { isMobile } from "react-device-detect";

export default function Navbar() {
    
    return isMobile ? (
        <div className="flex justify-between items-center font-[family-name:var(--font-geist-sans)]">
            <div className='w-80'>
                <Link href="/">
                <img src='del_logo_resized.jpg'></img>
                </Link>
            
            </div>
            <div className="flex space-x-50 p-4 mr-20">
                <Link href="/about">About</Link>
                <Link href="/menus">Menus</Link>
                <Link href="/contact">Contact</Link>
            </div>
      </div>
    ) : (
        <div className="flex justify-between items-center font-[family-name:var(--font-geist-sans)]">
            <div className='w-80'>
                <Link href="/">
                <img src='del_logo_resized.jpg'></img>
                </Link>
            </div>
            <div className="flex space-x-50 p-4 mr-20">
            <Link href="/about">About</Link>
            <Link href="/menus">Menus</Link>
            <Link href="/contact">Contact</Link>
            </div>
      </div>  
    )
}
