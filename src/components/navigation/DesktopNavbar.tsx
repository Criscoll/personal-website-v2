import { forwardRef } from 'react';

interface DesktopNavbarpProps {
    introComplete: boolean;
    layout: 'row' | 'column'
}



const DesktopNavbar = forwardRef<HTMLDivElement, DesktopNavbarpProps>(({ introComplete, layout }, forwardedRef) => {
    return (
        <>
            <div ref={forwardedRef} className={`navbar ${layout === 'row' ? 'initial-layout-row' : 'initial-layout-column'}`}>
                {introComplete ? (
                    <>
                        <button>Home</button>
                        <button>About</button>
                        <button>Experience</button>
                        <button>Projects</button>
                    </>
                ) : null}
            </div>
        </>
    );


});


export default DesktopNavbar;

