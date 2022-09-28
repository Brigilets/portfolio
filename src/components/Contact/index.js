import Loader from 'react-loaders';
import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import emailjs from '@emailjs/browser'

const Contact = () =>{

    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(()=>{
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail= (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_b034u15',
            'template_5meb29d',
            refForm.current ,
            'EqQBWXIOiMex6Xh0v'
        )
        .then(
            ()=>{
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
    }
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                             letterClass={letterClass}
                             strArray={['C','o','n','t','a','c','t',' ','m','e']}
                             idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in full-time employment opportunities with tech companies or as a consultant. If you have some questions or wish to get in touch, do not hesitate to contact me using the form below.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail} >
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Brigita Sabutyte,
                    <br/>
                    Belgium,
                    <br/>
                    1050 Ixelles
                    <br/>
                    <br/>
                    <span>b.sabutyte@gmail.com</span>
                </div>
                <div className="map-wrap">
          <MapContainer center={[50.8226159, 4.3573227]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[50.8226159, 4.3573227]}>
            </Marker>
          </MapContainer>
        </div>
            </div>
            <Loader type="pacman" />
        </>
    )
};

export default Contact;