import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { introComplete as introCompleteAtom } from '../../states';

interface MobileNavbarProps {
}

export default function MobileNavbar({ }: MobileNavbarProps) {
    const [displayNavbar, setDisplayNavbar] = useState(false);
    const [introComplete] = useRecoilState(introCompleteAtom);


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
                            className={`mobile-navbar ${displayNavbar ? 'display-right' : 'hide-right'
                                }`}
                        >
                            <span
                                className="close-btn"
                                onClick={() => setDisplayNavbar(!displayNavbar)}
                            >
                                <i className="fas fa-times"></i>
                            </span>
                        </aside>
                    </>
                ) : null}
            </header>
        </>
    );
}
