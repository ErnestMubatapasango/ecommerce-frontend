import React from 'react'
import Container from '@/components/ui/container'
import Link from 'next/link'
import MainNav from './main-nav'
import getCategories from '@/actions/get-categories'
import NavbarActions from '@/components/navbar-actions'
import Image from 'next/image'
export const revalidate = 0;

const Navbar = async() => {

  const categories = await getCategories()
  
  return (
    <div className='fixed z-10 w-full  top-[2rem] px-8'>
      <div className='h-[4rem] backdrop-blur-md bg-white shadow-lg backdrop-filter bg-opacity-20 rounded-xl'>
        <Container>
            <div className='relative h-16 flex items-center px-2 sm:px-4 lg:px-6 '>
                <Link href='/' className=' lg:ml-0 gap-x-2'>
                  <Image src="/db-agency.png" alt='logo' width={50} height={45}/>
                    {/* <p className='font-bold text-xl'>STORE</p> */}
                </Link>
                <MainNav data={categories} />
                <NavbarActions />
            </div>
        </Container>
      </div>
    </div>
    
  )
}

export default Navbar