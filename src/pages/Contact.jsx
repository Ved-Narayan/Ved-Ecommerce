import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletterbox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-cpl justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>SRM University <br/> Andhra Pradesh , INDIA </p>
          <p className='text-gray-500'>Tel: +91 7981881960 <br /> Email: vednarayan1980@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Have questions, feedback, or need help with your order? We’re here to help! Reach out to us anytime — our team is just a message away and ready to assist you. Your satisfaction means everything to us.</p>
        </div>
      </div>
      <Newsletterbox />
    </div>
  )
}

export default Contact
