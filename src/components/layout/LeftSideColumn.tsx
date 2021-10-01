import { useRecoilState } from 'recoil';
import { introComplete as introCompleteAtom } from '../../states';
import DesktopNavbar from '../navigation/DesktopNavbar';

interface LeftSideColumnProps {
    navbarInView: boolean;
}

export default function LeftSideColumn({ navbarInView }: LeftSideColumnProps) {

    const [introComplete] = useRecoilState(introCompleteAtom);

    return (
        <>
            <aside className="side-column-left-container">
                {navbarInView ? null : <DesktopNavbar introComplete={introComplete} layout="column" textSize='small' />}
            </aside>
        </>
    );
}
