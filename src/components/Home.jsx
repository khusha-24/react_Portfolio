import { useEffect, useRef } from 'react';
import pdf from '../pdf/resume.pdf';
import hero from './data/hero.json';
import Typed from 'typed.js';

function home() {
    const TypedElement = useRef(null);

    useEffect(() => {
        if (!TypedElement.current) return;

        const typed = new Typed(TypedElement.current, {
            strings: [
                "Welcome To My Profile",
                "Hi I'M Kushavrta Avchar",
                "I'M Front-End Developer",
            ],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 500,
            loop: true,
        });

        // Destroying
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <>
            <div className="container home" id='home'>
                <div className="left"
                    // data-aos="fade-right"
                    // data-aos-duration="1000"
                >
                    <h2 ref={TypedElement} ></h2>
                    <a href={pdf} download="resume.pdf" className="btn btn-outline-warning my-3">Download Cv</a>
                </div>
                <div className="right">
                    <div className="img"
                        // data-aos="fade-left"
                        // data-aos-duration="1000"
                    >
                        <img src={`/assets/${hero.imgSrc}`} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default home