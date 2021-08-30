import React from 'react';
import Typewriter from 'typewriter-effect';

export default function LandingPage() {
    const terminalLine: string = `> <span class="text-orange">criscoll: </span>`;
    const line1: string = 'Hi';
    const line2: string = ', my name is Cristian Bernal.';
    const line3: string = 'Welcome to my website.';

    return (
        <>
            <div className="landing-page-container">
                <div className="typewriter-content">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .pasteString(terminalLine, null)
                                .pauseFor(1000)
                                .typeString(line1)
                                .pauseFor(800)
                                .typeString(line2)
                                .pasteString(`<br />${terminalLine}`, null)
                                .pauseFor(1400)
                                .typeString(line3)
                                .start();
                        }}
                        options={{
                            delay: 70,
                            wrapperClassName: 'typewriter-wrapper-landing-page',
                            cursorClassName: 'typewriter-cursor-landing-page',
                        }}
                    />
                </div>
            </div>
        </>
    );
}
