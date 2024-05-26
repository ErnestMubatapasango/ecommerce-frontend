import React from 'react'
import  {CreditCard, Truck, Undo2} from 'lucide-react'
import { title } from 'process'
import Image from 'next/image'
const AboutPage = () => {

    const data = [
        {
            title: '45 Days Free Return',
            tagline: 'Easy, risk-free returns',
            icon: <Undo2 className='text-slate-400'  size={40} strokeWidth={2}/>,
        },
        {
            title: 'Secure Payments',
            tagline: 'Trusted payment options',
            icon: <CreditCard className='text-slate-400'  size={40} strokeWidth={2}/>,
        },
        {
            title: 'Free Shipping',
            tagline: '$20+ purchases ship free',
            icon: <Truck className='text-slate-400'  size={40} strokeWidth={2}/>,
        },
        
    ]

    const aboutCards = [
        {
            image: '/cutting.jpg',
            title: 'Precision Cutting',
            description: `Every great pair of jeans starts with a perfect cut. 
            Our skilled craftsmen use state-of-the-art techniques to ensure each piece of denim 
            is cut with precision, setting the foundation for a superior fit and unparalleled durability.`
        },
        {
            image: '/stitching.jpg',
            title: 'Expert Stitching',
            description: 'With meticulous attention to detail, our expert sewers bring the fabric to life. Using the finest threads and innovative stitching techniques, we create denim that not only looks great but is built to last through countless adventures.'
        },
        {
            image: '/final-product.jpg',
            title: 'The Final Product',
            description: 'The journey culminates in a piece of denim that epitomizes style and quality. Each product undergoes rigorous quality checks to ensure it meets our high standards, providing you with timeless fashion that feels as good as it looks.'
        }
    ];
  return (
    <div className="mx-2 md:mx-8 pt-20 mt-20 space-y-10 text-[#131b28]">
        <div className='space-y-5'>
            <h1 className='text-7xl font-medium '>Denim Crafted for All:<br /> Perfect Fit, Timeless Style!</h1>
            <p className='text-2xl font-light'>
                With decades of denim expertise, we&apos;ve curated collections that 
                showcase timeless quality<br/> and contemporary style, tailored to fit your unique lifestyle.
            </p>
        </div>
        
        <div id='about' className='bg-white relative'/>
        {/* icons */}
        <div className='flex justify-around'>
            {
                data.map(item => (
                    <div key={item.title} className='flex gap-4'>
                        {item.icon}
                        <div >
                            <h3 className='text-3xl font-medium '>{item.title}</h3>
                            <p className='text-base font-normal'>{item.tagline}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        {/* About cards */}
        <div className='flex  justify-between p-2 gap-10'>
            {aboutCards.map(item => {
                return (
                <div key={item.title} className=' rounded-2xl space-y-2 p-5 w-1/3 flex flex-col  items-start'>
                    <Image src={item.image} alt='product image' width={400} height={600} className='object-cover h-80 grayscale rounded-2xl' />
                    <h3 className='text-2xl font-semibold '>{item.title}</h3>
                    <p className='text-base font-light tracking-wide'>{item.description}</p>
                </div>
            )})}
        </div>

        <div className='w-full flex items-center gap-10'>
            <Image src='/store.jpg' alt='about section image' className='w-1/2 rounded-3xl grayscale' width={500} height={500} />
            <div className='w-1/2 space-y-5 flex flex-col items-center'>
                <h2 className='text-5xl font-medium text-center'>Discover Your Perfect Fit</h2>
                <p className='text-base text-center tracking-wide font-light'>
                    Our products are designed with meticulous attention to detail and a commitment to quality,
                    ensuring that you find something that not only fits perfectly but also feels amazing. 
                    The store is packed with a curated collection of that speaks to your unique style
                    Ready to transform your look?
                </p>
                <button className='text-white bg-[#131b28] border w-50 rounded-full p-3 text-base font-medium transition-colors ease-in-out hover:bg-black hover:scale-125 duration-500'>
                    Checkout our Store
                </button>
            </div>
        </div>
    </div>
  )
}

export default AboutPage