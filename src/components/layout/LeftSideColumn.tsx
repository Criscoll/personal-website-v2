import DesktopNavbar from '../navigation/DesktopNavbar';

interface LeftSideColumnProps {
    introComplete: boolean;
    navbarInView: boolean;
}

export default function LeftSideColumn({ introComplete, navbarInView }: LeftSideColumnProps) {
    return (
        <>
            <aside className="side-column-left-container">
                {navbarInView ? null : <DesktopNavbar introComplete={introComplete} layout="column" />}
            </aside>
        </>
    );
}
