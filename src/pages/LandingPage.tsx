import React from 'react';
import Typewriter from 'typewriter-effect';

interface IProps {
    introComplete?: boolean;
    setIntroComplete: () => void;
}

export default function LandingPage({
    introComplete,
    setIntroComplete,
}: IProps) {
    const terminalLine: string = `<span class="text-orange">criscoll: </span>`;
    const line1: string = 'Hi';
    const line2: string =
        ', my name is <span class="text-green">Cristian Bernal.</span> ';
    const line3: string = 'Welcome to my website.';

    return (
        <>
            <div className="landing-page-container">
                <div className="typewriter-content">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(1000)
                                .typeString('>')
                                .pauseFor(1000)
                                .typeString(` ${terminalLine}`)
                                .pauseFor(1000)
                                .typeString(line1)
                                .pauseFor(800)
                                .typeString(line2)
                                .pasteString(`<br /> > ${terminalLine}`, null)
                                .pauseFor(1400)
                                .typeString(line3)
                                .callFunction(() => {
                                    setTimeout(() => {
                                        setIntroComplete();
                                    }, 500);
                                })
                                .start();
                        }}
                        options={{
                            delay: 40,
                            wrapperClassName: 'typewriter-wrapper-landing-page',
                            cursorClassName: 'typewriter-cursor-landing-page',
                        }}
                    />
                </div>

                <div className="navbar">
                    {introComplete ? (
                        <>
                            <button>Home</button>
                            <button>About</button>
                            <button>Experience</button>
                            <button>Projects</button>
                        </>
                    ) : null}
                </div>
            </div>
        </>
    );
}
