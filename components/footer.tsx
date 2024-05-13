import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    // <div className='border-t mt-10'>
    //     <p className="text-black text-center py-10">&copy; 2024 Digital Bots Store, Inc. All rights reserved</p>
    // </div>
    <div className='bg-[#E9F1F7] mx-2 md:mx-8 md:px-10 px-5  py-10 mb-2 rounded-2xl'>
        <div className='py-3'>
            <div className='flex flex-col md:flex-row justify-between flex-wrap gap-y-5'>
                <div className='space-y-3'>
                    <h1 className='text-xl text-[#131b23] font-medium'>Company</h1>
                    <ul>
                        <li className='text-sm text-[#816C61]'>About us</li>
                        <li className='text-sm text-[#816C61]'>Location</li>
                        <li className='text-sm text-[#816C61]'>Gift cards</li>
                    </ul>
                </div>

                <div className='space-y-3'>
                    <h1 className='text-xl text-[#131b23] font-medium'>More Links</h1>
                    <ul>
                        <li className='text-sm text-[#816C61]'>Terms of use</li>
                        <li className='text-sm text-[#816C61]'>Privacy policy</li>
                        <li className='text-sm text-[#816C61]'>Support</li>
                    </ul>
                </div>

                <div className='space-y-3'>
                    <h1 className='text-xl text-[#131b23] font-medium'>Contact</h1>
                    <div className='flex flex-col gap-3'>
                        <p className='text-sm text-[#816C61]'>Customer Service: <br />Open: Mon - Sat (08:00 am - 17:00 pm)</p>
                        <p className='text-sm text-[#816C61]'>Shopping Assistance: <br />Open: Mon - Sat (08:00 am - 17:00 pm)</p>
                    </div>
                </div>

                <div className='space-y-3'>
                    <h1 className='text-xl text-[#131b23] font-medium'>Newsletter</h1>
                    <p className='text-sm text-[#816C61]'>Sign up to receive news, app updates,<br /> and other exclusive info via email.</p>
                    
                    <div className='flex flex-col md:flex-row justify-center gap-2'>
                        <input placeholder='Email' type='text' className=' text-center md:text-left focus:outline-none indent-2 text-slate-400 p-1 bg-transparent border-2 border-slate-400 rounded-full '/>
                        <button className='p-2 bg-slate-400 rounded-full text-[#816C61] border-none'>Subscribe</button>
                    </div>
                    
                </div>
            </div>
        </div>
        <hr className='border-1 border-slate-400' />
        <p className='pt-4 text-center text-sm text-[#816C61]'>Copyright &copy; 2024 All rights reserved | Website Design by <Link className='font-bold tracking-widest text-slate-400 ' href="https://www.digitalbots.agency" target='_blank'>Digital Bots Agency</Link></p>
    </div>
  )
}

export default Footer