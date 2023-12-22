import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import React, {useEffect, useState} from 'react';
import Logo from './Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['p', 'o', 't','i' ]
    const jobArray = [ 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', 's', '.']
    
  /*  useEffect(() => {
        return setTimeout(() => {
           setLetterClass('text-animate-hover') 
        }, 4000)
    }, [])*/
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <br />
                <span className={`${letterClass} _13`}>w</span>
                <span className={`${letterClass} _14`}>e</span>
                <span className={`${letterClass} _15`}> </span>
                <span className={`${letterClass} _16`}>a</span>
                <span className={`${letterClass} _17`}>r</span>
                <span className={`${letterClass} _18`}>e</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={17} />
                </h1>
                <h2>Fullstack web developers / IT Services / Cyber Security</h2>
                <Link to="/contact" className='flat-button'>CONTACT US</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home