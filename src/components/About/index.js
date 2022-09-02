import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './About.scss'
import { faBootstrap, faGitAlt, faHtml5, faJsSquare, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {

    const[letterClass, setLetterClass] = useState('text-animate')
    const aboutMe = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={aboutMe}
                        idx={15}
                    />
                </h1>
                <p>
                    I am a programmer, good with Javascript, ReactJS library, I am looking for new challenges to further develop in the IT industry.
                </p>
                <p>
                    Carrer goals:
                    Become a professional Frontend developer, 
                    learn about the latest technology, 
                    and then be a FullStack developer.
                </p>
                <p>
                    My greatest passion is in life is using my technical know-how to benefit other people and organisations.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faBootstrap} />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faSass} />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;