import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
         <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my1- flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome!!, your trusted destination for quality products, seamless shopping, and unbeatable customer service. Founded with a simple idea to make online shopping enjoyable, affordable, and reliable, we've grown into a platform where thousands of customers find what they love, every day.</p>
          <p>We carefully curate every product in our catalog to ensure it meets our standards for style, durability, and value. Whether you're shopping for the latest trends, everyday essentials, or unique finds, we are here to bring them right to your doorstep.</p>
          <b className='text-gray-800'>Our Mission:</b>
          <p>To provide an exceptional online shopping experience that combines quality, convenience, and customer satisfaction. We believe in making shopping not just a task, but a delightful experience.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray=600'>We handpick every item to ensure it meets our high standards of quality and style. Our commitment to excellence means you can shop with confidence, knowing you're getting the best.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Customer-Centric Service:</b>
          <p className='text-gray=600'>Your satisfaction is our priority. Our dedicated customer service team is always ready to assist you with any questions or concerns, ensuring a smooth and enjoyable shopping experience.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Fast and Reliable Shipping:</b>
          <p className='text-gray=600'>We understand the excitement of receiving your order quickly. That's why we offer fast and reliable shipping options to get your products to you as soon as possible.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Secure Shopping Experience:</b>
          <p className='text-gray=600'>Your security is our top priority. We use the latest encryption technology to protect your personal and payment information, ensuring a safe shopping environment.</p>
        </div>
      </div>
      <NewsletterBox />


    </div>
  )
}

export default About
