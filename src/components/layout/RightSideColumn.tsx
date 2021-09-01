import { useState, useEffect } from 'react';
import emailIcon from '../../assets/images/email-icon-white.png';
import linkedinIcon from '../../assets/images/linkedin-icon-white.png';
import githubIcon from '../../assets/images/github-icon-white.png';
import Typewriter from 'typewriter-effect';

interface IProps {
    introComplete?: boolean;
}

export default function RightSideColumn({ introComplete }: IProps) {
    const [hoveredContact, setHoveredContact] = useState('');
    const [renderTypewriter, setRenderTyperwriter] = useState(false);

    useEffect(() => {
        setRenderTyperwriter(false);
        setTimeout(() => {
            setRenderTyperwriter(true);
        }, 0);
    }, [hoveredContact]);

    return (
        <>
            <div className="side-column-right-container">
                {introComplete ? (
                    <>
                        <h1 className="resume">Resume</h1>

                        <div className="contact-details">
                            {renderTypewriter ? (
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString(hoveredContact)
                                            .start();
                                    }}
                                    options={{
                                        delay: 60,
                                        wrapperClassName:
                                            'typewriter-wrapper-column',
                                        cursorClassName:
                                            'typewriter-cursor-column',
                                    }}
                                />
                            ) : null}
                            <div className="contact-icons">
                                <img
                                    src={emailIcon}
                                    alt="email"
                                    onMouseEnter={() => {
                                        setHoveredContact('Email');
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredContact('');
                                    }}
                                />
                                <img
                                    src={linkedinIcon}
                                    alt="linkedin"
                                    onMouseEnter={() => {
                                        setHoveredContact('LinkedIn');
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredContact('');
                                    }}
                                />
                                <img
                                    src={githubIcon}
                                    alt="github"
                                    onMouseEnter={() => {
                                        setHoveredContact('Github');
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredContact('');
                                    }}
                                />
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        </>
    );
}
