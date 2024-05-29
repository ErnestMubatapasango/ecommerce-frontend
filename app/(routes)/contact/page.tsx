"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import  Button  from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Mails, PhoneIncoming } from 'lucide-react'
import React from 'react'
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.coerce.string().email().min(5, {
        message: "Enter a valid email address",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters",
    })
  })

const ContactPage = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: "",
          message: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

  return (
    <div className="mx-2 md:mx-8 pt-20 mt-20 mb-10 space-y-10" id="contact">
        <div className="bg-slate-100 text-[#131b28] flex flex-col smm:flex-row justify-between gap-x-5 gap-y-8 p-4 md:p-8 rounded-3xl">
            <div className="w-full md:w-1/2 space-y-8">
                <h1 className="text-4xl xss:text-5xl lg:text-6xl xl:text-7xl font-extrabold ">Get in touch<br className="hidden md:block"/> with our team today</h1>
                <p className=" text-sm xss:text-base font-medium tracking-wide">Need  Any Help? Send us a message using the form below and we&apos;ll<br className="hidden xl:block" /> get back to you promptly!</p>
                <div className="flex gap-2 sm:gap-4 items-center">
                    <Mails className="bg-[#131b28] w-10 h-10 xss:w-14 xss:h-14 md:w-18 md:h-18 p-2 xss:p-3 rounded-xl sm:rounded-2xl text-white" />
                    <div>
                        <h3 className=" text-base md:text-xl font-bold">Send Us an Email</h3>
                        <p className="text-xs xss:text-sm sm:text-base">info@digitalbots.agency</p>
                    </div>
                </div>
                <div className="flex gap-2 sm:gap-4 items-center">
                    <PhoneIncoming className="bg-[#131b28] w-10 h-10 xss:w-14 xss:h-14 md:w-18 md:h-18 p-2 xss:p-3 rounded-xl sm:rounded-2xl text-white"/>
                    <div>
                        <h3 className="text-base md:text-xl font-bold">Call Us!</h3>
                        <p className="text-xs xss:text-sm sm:text-base">+263 783 486 305</p>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Your Name" {...field} className="h-14 text-base md:text-lg font-normal shadow-lg bg-white" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input type="email" placeholder="Your Email" {...field} className="h-14 text-base md:text-lg font-normal shadow-lg bg-white" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                    <Textarea placeholder="Type Your Message Here!" {...field}  className="h-40 text-base md:text-lg font-normal shadow-lg bg-white" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <Button type="submit" className="w-full rounded-xl h-14 shadow-xl bg-[#131b28]">Send Message</Button>
                    </form>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default ContactPage
