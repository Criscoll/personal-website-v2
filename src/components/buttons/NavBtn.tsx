import { introComplete as introCompleteAtom, navbarInView as navbarInViewAtom } from '../../states';
import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';


interface NavBtnProps {
    name: string;
    link: string;
    textSize: 'small' | 'medium' | 'large';
    isStatic: boolean;
}

const NavBtn = ({ name, link, textSize, isStatic }: NavBtnProps) => {

    const [introComplete] = useRecoilState(introCompleteAtom);
    const [navbarInView] = useRecoilState(navbarInViewAtom);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(introComplete);
        }, 800)
    }, [introComplete]);

    return <>
        <a href={link} className={`${!navbarInView || isStatic ? 'pop-up' : 'pop-up-hide'} ${isStatic || visible ? 'visible' : 'invisible'}`}>
            <button className={`nav-btn text-size-${textSize} ${!navbarInView || isStatic ? 'pop-up' : 'pop-up-hide'}`}>{name}</button>
        </a>
    </>

}

export default NavBtn;