import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const FAQ = () => {
  return (
    <div className="mx-2 md:mx-8 pt-20 mt-20 space-y-10 text-[#131b28]">
        <h1 className="text-7xl font-extrabold text-center">Frequently Asked Questions</h1>
        <div className='flex w-full items-start justify-between gap-5'>
            <div className='w-1/2 space-y-5'>
                <Card className='bg-[#E9F1F7] text-[#131b28] hover:bg-[#131b28] hover:text-[#E9F1F7] rounded-3xl border-none outline-none text-2xl transition-colors'>
                    <CardHeader>
                        <CardTitle>
                            What payment methods do you accept?
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Proin a lorem libero. Integer aliquet consectetur libero ac volutpat.
                            Nulla in dictum purus. Suspendisse suscipit malesuada libero, vel tristique enim elementum vel.
                        </CardDescription>
                    </CardContent>
                </Card>
                <div className='flex gap-5'>
                    <Card className='bg-[#E9F1F7] text-[#131b28] hover:bg-[#131b28] hover:text-[#E9F1F7] rounded-3xl border-none outline-none text-2xl transition-colors'>
                        <CardHeader>
                            <CardTitle>
                                What is your return policy?
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel metus et elit gravida.
                            </CardDescription>
                        </CardContent>
                    </Card>
                    <Card className='bg-[#E9F1F7] text-[#131b28] hover:bg-[#131b28] hover:text-[#E9F1F7] rounded-3xl border-none outline-none text-2xl transition-colors'>
                        <CardHeader>
                            <CardTitle>
                                How can I contact customer support?
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel metus et elit gravida.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
                <Card className='bg-[#E9F1F7] text-[#131b28] hover:bg-[#131b28] hover:text-[#E9F1F7] rounded-3xl border-none outline-none text-2xl transition-colors'>
                    <CardHeader>
                        <CardTitle>
                            Are my personal and payment details secure?
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Proin a lorem libero. Integer aliquet consectetur libero ac volutpat. 
                            Nulla in dictum purus. Suspendisse suscipit malesuada libero, vel tristique enim elementum vel.
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>

            <div className='w-1/2 space-y-5'>              
                <div className='flex gap-5'>
                    <Card className='bg-[#E9F1F7] text-[#131b28] hover:bg-[#131b28] hover:text-[#E9F1F7] rounded-3xl border-none outline-none text-2xl transition-colors'>
                        <CardHeader>
                            <CardTitle>
                                How long does shipping take?
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel metus et elit gravida
                            </CardDescription>
                        </CardContent>
                    </Card>
                    <Card className='bg-[#E9F1F7] text-[#131b28] hover:bg-[#131b28] hover:text-[#E9F1F7] rounded-3xl border-none outline-none text-2xl transition-colors'>
                        <CardHeader>
                            <CardTitle>
                                Can I track my order?
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                PLorem ipsum dolor sit amet, consectetur adipiscing elit. In vel metus et elit gravida.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
                <Card className='bg-[#E9F1F7] text-[#131b28] hover:bg-[#131b28] hover:text-[#E9F1F7] rounded-3xl border-none outline-none text-2xl transition-colors'>
                    <CardHeader>
                        <CardTitle>
                            Are there any discounts or promotions available?
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Proin a lorem libero. Integer aliquet consectetur libero ac volutpat.
                            Nulla in dictum purus. Suspendisse suscipit malesuada libero, vel tristique enim elementum vel.
                        </CardDescription>
                    </CardContent>
                </Card>
                <div className='flex gap-5'>
                    <Card className='bg-[#E9F1F7] text-[#131b28] hover:bg-[#131b28] hover:text-[#E9F1F7] rounded-3xl border-none outline-none text-2xl transition-colors'>
                        <CardHeader>
                            <CardTitle>
                                Do you offer international shipping?
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel metus et elit gravida.
                            </CardDescription>
                        </CardContent>
                    </Card>
                    <Card className='bg-[#E9F1F7] text-[#131b28] hover:bg-[#131b28] hover:text-[#E9F1F7] rounded-3xl border-none outline-none text-2xl transition-colors'>
                        <CardHeader>
                            <CardTitle>
                            How can I change or cancel my order?
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel metus et elit gravida.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
        {/* {FAQ} */}
      <div className="bg-[#131B28] text-[#E9F1F7] flex flex-col items-center justify-center gap-5 rounded-3xl h-[30rem]">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white">Have A Question? <br/> We Are Here To Help</h1>
        <div className="flex">
          <Image src="/user6.jpg" width={100} height={100} alt="faq" className="w-10 object-contain rounded-full"/>
          <Image src="/user7.jpg" width={100} height={100} alt="faq" className="w-10 object-contain rounded-full"/>
          <Image src="/user8.jpg" width={100} height={100} alt="faq" className="w-10 object-contain rounded-full"/>
          <Image src="/user9.jpg" width={100} height={100} alt="faq" className="w-10 object-contain rounded-full"/>
        </div>
        <p className="text-center">Our customer support is available<br /> monday to friday: 8am-8:30pm.</p>
        <button className="bg-[#E7DFC6] py-4 px-8 text-xl font-bold text-slate-500 rounded-2xl">Contact us</button>
      </div>
    </div>
  )
}

export default FAQ