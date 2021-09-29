import { useState } from 'react';

interface MobileNavbarProps {
    introComplete: boolean;
}

export default function MobileNavbar({ introComplete }: MobileNavbarProps) {
    const [displayNavbar, setDisplayNavbar] = useState(false);

    console.log(displayNavbar);

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
                            className={`mobile-navbar ${
                                displayNavbar ? 'display-right' : 'hide-right'
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
