import { introComplete as introCompleteAtom, navbarInView as navbarInViewAtom } from '../../states';
import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';


interface NavBtnProps {
    name: string;
    textSize: 'small' | 'medium' | 'large';
    isStatic: boolean;
}

const NavBtn = ({ name, textSize, isStatic }: NavBtnProps) => {

    const [introComplete] = useRecoilState(introCompleteAtom);
    const [navbarInView] = useRecoilState(navbarInViewAtom);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(introComplete);
        }, 800)
    }, [introComplete]);

    return <>
        <button className={`nav-btn text-size-${textSize} ${!navbarInView || isStatic ? 'pop-up' : 'pop-up-hide'} ${isStatic || visible ? 'visible' : 'invisible'}`}>{name}</button>
    </>

}

export default NavBtn;