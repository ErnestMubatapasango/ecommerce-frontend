import React from 'react'
import  {CreditCard, Truck, Undo2} from 'lucide-react'
import { title } from 'process'
import Image from 'next/image'
const AboutPage = () => {

    const data = [
        {
            title: '45 Days Free Return',
            tagline: 'Easy, risk-free returns',
            icon: <Undo2 className='text-[#e9c96c] w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14' strokeWidth={2}/>,
        },
        {
            title: 'Secure Payments',
            tagline: 'Trusted payment options',
            icon: <CreditCard className='text-[#e9c96c] w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14' strokeWidth={2}/>,
        },
        {//#E7DFC6
            title: 'Free Shipping',
            tagline: '$20+ purchases ship free',
            icon: <Truck className='text-[#e9c96c] w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14' strokeWidth={2}/>,
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
            <h1 className='text-4xl xss:text-5xl md:text-7xl font-medium'>Denim Crafted for All:<br className='hidden xs:block'/> Perfect Fit, Timeless Style!</h1>
            <p className='xs:text-2xl font-light text-center sm:text-left'>
                With decades of denim expertise, we&apos;ve curated collections that 
                showcase timeless quality<br/> and contemporary style, tailored to fit your unique lifestyle.
            </p>
        </div>
        
        <div id='about' className='bg-white relative w-full'/>
        {/* icons */}
        <div className='flex gap-5 sm:flex-row flex-wrap justify-center sm:justify-around'>
            {
                data.map(item => (
                    <div key={item.title} className='flex items-start sm:items-center gap-4'>
                        {item.icon}
                        <div >
                            <h3 className='text-lg md:text-3xl font-medium'>{item.title}</h3>
                            <p className='text-base font-normal'>{item.tagline}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        {/* About cards */}
        <div className='flex flex-col md:flex-row justify-between p-2 gap-3 gap-y-8'>
            {aboutCards.map((item, index) => {
                return (
                <div key={item.title} className={`rounded-2xl space-y-2 md:p-5 gap-5 flex flex-col xs:flex-row md:flex-col items-center ${index === 1 ? 'xs:flex-row-reverse' : ''}`}>
                    <Image src={item.image} alt='process image' width={400} height={600} className=' xs:w-1/2 md:w-full object-cover h-60 grayscale rounded-2xl' />
                    <div className='xs:w-1/2 md:w-full'>
                        <h3 className='text-2xl font-semibold text-[#131b28] text-center md:text-left'>{item.title}</h3>
                        <p className='text-sm font-normal subpixel-antialiased italic tracking-wide text-center md:text-left text-wrap'>{item.description}</p>
                    </div>
                </div>
            )})}
        </div>

        <div className='w-full flex flex-col smm:flex-row items-center gap-5 p-4 md:gap-10'>
            <Image src='/store.jpg' alt='about section image' className=' smm:w-1/2 rounded-3xl grayscale' width={500} height={500} />
            <div className='smm:w-1/2 space-y-5 flex flex-col items-center'>
                <h2 className='text-3xl md:text-5xl font-medium text-center'>Discover Your Perfect Fit</h2>
                <p className='text-base text-center sm:text-balance tracking-wide font-light'>
                    Our products are designed with meticulous attention to detail and a commitment to quality,
                    ensuring that you find something that not only fits perfectly but also feels amazing. 
                    The store is packed with a curated collection of that speaks to your unique style
                    Ready to transform your look?
                </p>
                <button className='text-slate-500 bg-[#E7DFC6] border w-50 rounded-full p-3 text-base font-medium transition-colors ease-in-out hover:bg-black hover:scale-125 duration-500'>
                    Checkout our Store
                </button>
            </div>
        </div>
    </div>
  )
}

export default AboutPage