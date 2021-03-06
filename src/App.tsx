import LeftSideColumn from './components/layout/LeftSideColumn';
import RightSideColumn from './components/layout/RightSideColumn';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import MobileNavbar from './components/navigation/MobileNavbar';
import { useInView } from 'react-intersection-observer';
import { useRecoilState } from 'recoil';
import { introComplete as introCompleteAtom, navbarInView as navbarInViewAtom } from './states';
import { useEffect } from 'react';

function App() {
    const [introComplete] = useRecoilState(introCompleteAtom);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setNavbarInView] = useRecoilState(navbarInViewAtom) // recoil wrapper for react-intersection-observer 
    const { ref: navbarRef, inView } = useInView();

    // need to update the recoil atom for global access of navbarInView
    useEffect(() => {
        setNavbarInView(inView);
    }, [inView, setNavbarInView])




    return (
        <>
            <div className="overlay" />
            <LeftSideColumn />
            <main className="content-space">
                <LandingPage ref={navbarRef} />
                {introComplete ? (
                    <>
                        <AboutPage />
                        <ProjectsPage />
                    </>
                ) : null}
            </main>
            <MobileNavbar />
            <RightSideColumn />
        </>
    );
}

export default App;
