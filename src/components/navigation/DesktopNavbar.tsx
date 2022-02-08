import { forwardRef } from 'react';
import NavBtn from '../buttons/NavBtn';

interface DesktopNavbarpProps {
    introComplete: boolean;
    layout: 'row' | 'column';
    textSize: 'small' | 'medium' | 'large';
    isStatic: boolean;
    btnList?: string[];
}



const DesktopNavbar = forwardRef<HTMLDivElement, DesktopNavbarpProps>(({ introComplete, layout, textSize, isStatic }, forwardedRef) => {

    const btnList = ['Home', 'About', 'Projects'];

    return (
        <>
            <div ref={forwardedRef} className={`navbar ${layout === 'row' ? 'initial-layout-row' : 'initial-layout-column'}`}>
                {introComplete ? (
                    <>
                        {btnList.map((name) => {
                            return <NavBtn name={name} textSize={textSize} isStatic={isStatic} />
                        })}
                    </>
                ) : null}
            </div>
        </>
    );


});


export default DesktopNavbar;

