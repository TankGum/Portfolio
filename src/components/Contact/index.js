import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './Contact.scss'
import Map from '../Map';

function Contact() {
    const contactMe = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']
    const [letterClass, setLetterClass] = useState('text-animate')
    const [textValue, setTextValue] = useState('')

    const handleOnChange = (e) => {
        setTextValue(e.target.value)
    }
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={contactMe}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Please let me know if you have any questions.
                    </p>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea value={textValue} onChange={handleOnChange} placeholder='Message...'>
                                        <input value="" name='message' required />
                                    </textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Ha Noi, Viet Nam
                    <span>tankgum99@outlook.com</span>
                </div>
                <div className='map-wrap'>
                    <Map />
                </div>
            </div>
        </>
    )
}

export default Contact;