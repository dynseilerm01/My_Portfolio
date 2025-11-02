import { assets } from '@/assets/assets'
import Image from "next/image";

import React, { useRef } from 'react'

const Navbar = () => {

    const sideMenuRef = useRef();

    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

  return (
    <>
    {/* adding a font background on top of the Navbar */}
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
    <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div>
        <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center 
        justify-between z-50'>
            {/* adding the logo for my portfolio */}
            <a href="#top">
                <Image src={assets.logo} alt ='logo of my website' className='w-28 
                cursor pointer mr-14'/>
            </a>

            {/** menu of my portfolio, to be hidden if renedered in a mobile size screen 
             * with rounded borders*/}
            <ul className='hidden md:flex items-center gap-6 lg:gap-8 
            rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50' >
                <li><a className='font-Inter' href="top">Home</a></li>
                <li><a className='font-Inter'href="#about">About</a></li>
                <li><a className='font-Inter'href="#service">Services</a></li>
                <li><a className='font-Inter'href="#work">My work</a></li>
                <li><a className='font-Inter' href="#contact">Contact me</a></li>
            </ul>

            {/** Contact and moon icon section of the Navbar */}
            <div className='flex items-center gap-4'>
                <button>
                    <Image src={assets.moon_icon} alt='' className='w-6'/>
                </button>

                <a href="#contact" className='hidden lg:flex items-center
                gap-3 px-10 py-2.5 border border-black-500 rounded-full ml-4 font-Inter'>
                    contact <Image src={assets.arrow_icon} alt ='' className='w-3'/> 
                </a>

                <button className='block md:hidden m1-3' onClick={openMenu}>
                    <Image src={assets.menu_black} alt='' className='w-6'/>
                </button>
            </div>


            {/* -- ----- mobile menu ----- -- */}

            <ul ref={(sideMenuRef)} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
            top-0 bottom-0 w-54 z-50 h-screen bg-gray-50 transition duration-500'>

                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
                </div>

                <li><a className='font-Inter' onClick={closeMenu} href="top">Home</a></li>
                <li><a className='font-Inter' onClick={closeMenu} href="#about">About</a></li>
                <li><a className='font-Inter' onClick={closeMenu} href="#service">Services</a></li>
                <li><a className='font-Inter' onClick={closeMenu} href="#work">My work</a></li>
                <li><a className='font-Inter' onClick={closeMenu} href="#contact">Contact me</a></li>                
            </ul>
        </nav>
    </>
  )
}

export default Navbar