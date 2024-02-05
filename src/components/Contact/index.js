import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import LogoTitle from '../../assets/images/logo-s.png'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_glspcjv', 'template_peyip8u', refForm.current, 'L7YCdWH17EiA1Y26n')
      .then((result) => {
          console.log(result.text);
          alert("Email Sent Successfully!")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <div className="contact-page container">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>

          <div>
            <p>
              Please feel free to contact me, you just need to fill the form below:
            </p>
          </div>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                    <li className='half'>
                        <input type='text' name='user_name' placeholder='Name' required />
                    </li>
                    <li className='half'>
                        <input type='text' name='user_email' placeholder='Email' required />
                    </li>
                    <li>
                        <input type='text' name='subject' placeholder='Subject' required/>
                    </li>
                    <li>
                        <textarea name='message' placeholder='Message' required></textarea>
                    </li>
                    <li>
                        <input type='submit' className='flat-button'value='Send' />
                    </li>
                </ul>
            </form>
          </div>
        </div>
        <div className='logo'>
            <img src={LogoTitle} className='image'></img>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
