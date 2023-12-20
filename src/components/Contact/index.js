import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    // useEffect(() => {
    //     return setTimeout(() => {
    //        setLetterClass('text-animate-hover') 
    //     }, 3000)
    // }, [])
    
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_jut6b5l',
            'template_rg30zl1',
            refForm.current,
            'BdWlymVYK16Yh55Dg'
        )
        .then (
            (result) => {
                alert('Your message has been sent!')
                window.location.reload(false)
            },
            (error) => {
                alert('Failed to send the message! Please try again later.')
            }
        )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ','m','e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        For freelance opportunities or projects hit me up! I am always looking
                        for the next project and will be more than happy to contribute!
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                 <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                    <li>
                    <input type="submit" className="flat-button" value="SEND" />
                    </li>
                </ul>
                        </form>

                    </div>
                </div>

            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact