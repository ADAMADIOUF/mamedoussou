import React from 'react'
import Cimg1 from "../images/contact1.jpeg"
import Cimg2 from '../images/contact11.png'
import Cimg3 from '../images/contact22.png'

import { AiOutlineMail, AiTwotonePhone } from 'react-icons/ai'
import Footer from '../Footer'
const Contact = () => {
  return (
    <div>
      <div className='contact'>
        <img src={Cimg1} alt='' />
      </div>
      <div className='container-links-contact section-center'>
        <div className='contact-contact-links'>
          <img src={Cimg2} alt='' />
          <span>
            <AiOutlineMail />
          </span>
          <h3>nous ecrire:</h3>
          <h5>mamebiramediouf17@gmail.com</h5>
        </div>
        <div className='contact-contact-links'>
          <img src={Cimg3} alt='' />
          <span>
            <AiTwotonePhone />
          </span>
          <h3>nous appeler:</h3>
          <h5>221 77 706 25 56</h5>
        </div>
      </div>
      <section className='section-center'>
        <div className='contact-banner'>
          {/* <img src={Cimg4} alt='' /> */}
          <div className='banner-contact-details'>
            <h3>formulaire de contact</h3>
            <h6>pour plus d'information</h6>
          </div>
          <div className='contact-form'>
            <form action='' className='form'>
              <div className='containercontact'>
                <div>
                  <h3>nom (obligatoire)</h3>
                  <input type='text' className='input-form' />
                </div>
                <div>
                  <h3>E-mail (obligatoire)</h3>
                  <input type='email' className='input-form' />
                </div>
              </div>
              <div>
                <h3>sujet</h3>
                <input type='text' className='input-form' />
              </div>
              <textarea name='' className='input-form'></textarea>
              <button className="btn btn-contact">envoyer</button>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Contact
