"use client"
import React from 'react'
import Container from '@/components/ui/container'
import Link from 'next/link'
import MainNav from './main-nav'
import NavbarActions from '@/components/navbar-actions'
import Image from 'next/image'
import { Menu } from 'lucide-react'
export const revalidate = 0;

const Navbar = () => {

  //const categories = await getCategories()
  const [mobileMenu, setMobileMenu] = React.useState(false)
  
  const toggleMobileMenu = () => {
    setMobileMenu(prevMenu => !prevMenu)
  }

  return (
    <div className='fixed z-20 w-full top-[2rem] px-2 md:px-6 lg:px-8'>
      <div className='h-[4rem] backdrop-blur-xl bg-white shadow-lg backdrop-filter bg-opacity-20 rounded-xl'>
        <Container>
            <div className='h-16 flex items-center justify-between px-2 sm:px-4 lg:px-6 '>
                <Link href='/' className=' lg:ml-0 gap-x-2'>
                  <Image src="/db-agency.png" alt='logo' width={50} height={45}/>
                    {/* <p className='font-bold text-xl'>STORE</p> */}
                </Link>
                { 
                  mobileMenu && 
                  <div className='relative w-full top-44 mt-4 smm:hidden'>
                    <div className='backdrop-blur-md bg-white shadow-lg backdrop-opacity-20 bg-opacity-90 rounded-xl space-y-5 p-4'>
                      <MainNav toggle={toggleMobileMenu}/>
                      <NavbarActions toggle={toggleMobileMenu}/>
                    </div>
                  </div>  
                }
                <div className='hidden smm:flex smm:items-start'>
                  <MainNav  toggle={toggleMobileMenu}/>
                </div>
                <div className='hidden smm:flex'>
                  <NavbarActions  toggle={toggleMobileMenu}/>
                </div>              
                <Menu onClick={toggleMobileMenu} className='text-[#131b28] cursor-pointer smm:hidden' size={30}/>
            </div>
        </Container>
      </div>
    </div>
    
  )
}

export default Navbar