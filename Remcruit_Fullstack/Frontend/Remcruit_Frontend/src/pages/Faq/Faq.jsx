import React from 'react'
import FaqCards from './FaqCards';
import FaqItems from './FaqItems';

function Faq() {
  return (
    <div className='faqpage'>
      <h1>Hi! How can we help you today?</h1>
      <input type="search" name="" id="" placeholder='Search FAQs'/>
      <FaqCards/>
      <FaqItems/>
    </div>
  )
}

export default Faq
