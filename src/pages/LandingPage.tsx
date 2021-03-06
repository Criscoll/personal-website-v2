import { forwardRef } from 'react';
import Typewriter from 'typewriter-effect';
import { useRecoilState } from 'recoil';
import { introComplete as introCompleteAtom } from '../states';
import DesktopNavbar from '../components/navigation/DesktopNavbar';



const LandingPage = forwardRef<HTMLDivElement>((_, navbarRef) => {
    const [introComplete, setIntroComplete] = useRecoilState(introCompleteAtom);
    const terminalLine: string = '>';
    const line1: string = ' Hi';
    const line2: string =
        ', my name is <span class="text-green">Cristian Bernal</span> ';
    const line3: string = ' Welcome to my website ';


    return (
        <>
            <section className="landing-page-container" id="home">
                <div className="typewriter-content">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .pasteString(terminalLine, null)
                                .pauseFor(2000)
                                .typeString(line1)
                                .pauseFor(800)
                                .typeString(line2)
                                .pasteString(`<br /> ${terminalLine} `, null)
                                .pauseFor(1400)
                                .typeString(line3)
                                .callFunction(() => {
                                    setTimeout(() => {
                                        setIntroComplete(true);
                                    }, 500);
                                })
                                .start();
                        }}
                        options={{
                            delay: 40,
                            wrapperClassName: 'typewriter-wrapper-landing-page',
                            cursorClassName: 'typewriter-cursor-landing-page',
                            cursor: '_'
                        }}
                    />
                </div>

                <DesktopNavbar ref={navbarRef} introComplete={introComplete} layout='row' textSize='large' isStatic={true} />

            </section>
        </>
    );
});

export default LandingPage;