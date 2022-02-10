import { forwardRef } from 'react';
import NavBtn from '../buttons/NavBtn';

interface DesktopNavbarpProps {
    introComplete: boolean;
    layout: 'row' | 'column';
    textSize: 'small' | 'medium' | 'large';
    isStatic: boolean;
}



const DesktopNavbar = forwardRef<HTMLDivElement, DesktopNavbarpProps>(({ introComplete, layout, textSize, isStatic }, forwardedRef) => {

    const btnList = ['Home', 'About', 'Projects'];
    const anchorList = ['#home', '#about', '#projects']

    return (
        <>
            <div ref={forwardedRef} className={`navbar ${layout === 'row' ? 'initial-layout-row' : 'initial-layout-column'}`}>
                {introComplete ? (
                    <>
                        {btnList.map((name, idx) => {
                            return <NavBtn key={name} name={name} link={anchorList[idx]} textSize={textSize} isStatic={isStatic} />
                        })}
                    </>
                ) : null}
            </div>
        </>
    );


});


export default DesktopNavbar;

