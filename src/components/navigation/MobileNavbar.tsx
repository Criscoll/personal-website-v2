import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { introComplete as introCompleteAtom } from '../../states';
import DesktopNavbar from './DesktopNavbar';


export default function MobileNavbar() {
    const [displayNavbar, setDisplayNavbar] = useState(false);
    const [introComplete] = useRecoilState(introCompleteAtom);
    const [mobileNavbarRendered, setMobileNavbarRendered] = useState(false);

    useEffect(() => {
        if (introComplete) {
            setTimeout(() => {
                setMobileNavbarRendered(true);
            }, 200)
        }
    }, [introComplete])



    return (
        <>
            <header className="mobile-navbar-container">
                {introComplete ? (
                    <>
                        <span
                            className="burger-btn"
                            onClick={() => setDisplayNavbar(!displayNavbar)}
                        >
                            <i className="fas fa-bars"></i>
                        </span>
                        <aside
                            className={`mobile-navbar ${displayNavbar ? 'display-right' : 'hide-right'} ${mobileNavbarRendered ? 'visibile' : 'invisible'}
                                }`}
                        >
                            <span
                                className="close-btn"
                                onClick={() => setDisplayNavbar(!displayNavbar)}
                            >
                                <i className="fas fa-times"></i>
                            </span>

                            <DesktopNavbar introComplete={introComplete} layout='row' textSize='small' isStatic={true} />
                        </aside>
                    </>
                ) : null}
            </header>
        </>
    );
}
