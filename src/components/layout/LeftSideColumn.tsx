import { useRecoilState } from 'recoil';
import { introComplete as introCompleteAtom } from '../../states';
import DesktopNavbar from '../navigation/DesktopNavbar';


export default function LeftSideColumn() {

    const [introComplete] = useRecoilState(introCompleteAtom);

    return (
        <>
            <aside className="side-column-left-container">
                <DesktopNavbar introComplete={introComplete} layout="column" textSize='medium' isStatic={false} />
            </aside>
        </>
    );
}
