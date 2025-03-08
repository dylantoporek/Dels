"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { isMobile as detectMobile } from "react-device-detect";

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Function to check screen width
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768); // Mobile = <768px
        };

        checkScreenSize(); // Check once on mount
        window.addEventListener("resize", checkScreenSize); // Listen for window resize

        return () => window.removeEventListener("resize", checkScreenSize); // Cleanup
    }, []); 
    return isMobile ? (
        <div className="flex flex-col justify-between items-center font-[family-name:var(--font-geist-sans)]">
            <div className='w-[300px] min-w-[300px]'>
                <Link href="/">
                <img src='del_logo_resized.jpg'></img>
                </Link>
            </div>
            <div className="flex w-[100%] justify-around p-4">
                <Link href="/about">About</Link>
                <Link href="/menus">Menus</Link>
                <Link href="/contact">Contact</Link>
            </div>
      </div>
    ) : (
        <div className="flex justify-between items-center font-[family-name:var(--font-geist-sans)]">
            <div className='w-[300px] min-w-[300px]'>
                <Link href="/">
                <img src='del_logo_resized.jpg'></img>
                </Link>
            </div>
            <div className="flex w-[60%] justify-around p-4">
            <Link href="/about">About</Link>
            <Link href="/menus">Menus</Link>
            <Link href="/contact">Contact</Link>
            </div>
      </div>  
    )
}
