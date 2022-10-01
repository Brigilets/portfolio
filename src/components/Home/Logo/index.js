import './index.scss'
// import LogoS from '../../../assests/images/logo-s.png'
import { useEffect, useState } from 'react';
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
// import gsap from 'gsap-trial';
import AnimatedLetters from '../../AnimatedLetters';

const Logo = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(()=>{
        const timer= setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () =>{
            clearTimeout(timer)
        }
    }, [])
    return(
        <div className='text-logo'>
                 <h1 className='page-title' >
            <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={'Welcome!'.split("")}
                        idx={15}
                    />
                 </h1>
        </div>
    )
}

export default Logo