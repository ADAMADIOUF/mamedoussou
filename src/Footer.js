import React from 'react'
import Logo from '../src/images/logom2.png'
const Footer = () => {
  const current = new Date()
  const date = `${current.getFullYear()}`
  return (
    <div>
      <div className='footer'>
        <div className='section-center'>
          <div className='footer-container'>
            <article className='logo-footer'>
              <img src={Logo} alt='' />
              <div className='contact-footer'>
                <h3>tivaoune peulh</h3>
                <h5>
                  {' '}
                  <span>+221777062556</span>
                </h5>
                <h5>
                  {' '}
                  <span>mamebirame@gmail.com</span>
                </h5>
              </div>
            </article>
            <article className='logo-site'>
              <h3>plan du site</h3>
              <ul className='link-footer'>
                <li>
                  <a href='/'>accueil</a>
                </li>
                <li>
                  <a href='/about'>presentation</a>
                </li>
                <li>
                  <a href='/boutique'>boutique</a>
                </li>

                <li>
                  <a href='/contact'>contact</a>
                </li>
              </ul>
            </article>
            <article className='logo-information'>
              <h3>informations legales</h3>
              <h5>
                <span>mentions legales</span>
              </h5>
              <h5>
                <span>politique de confidentialite</span>
              </h5>
              <h5>
                <span>condition generales de vente</span>
              </h5>
            </article>
          </div>
          <div className='footer-date'>
            <h3 className='date'>
              &copy; {date}
              <span> adamadiouf2017@gmail.com </span>all rights reserved
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer