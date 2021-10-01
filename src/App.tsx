import LeftSideColumn from './components/layout/LeftSideColumn';
import RightSideColumn from './components/layout/RightSideColumn';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import MobileNavbar from './components/navigation/MobileNavbar';
import { useInView } from 'react-intersection-observer';
import { useRecoilState } from 'recoil';
import { introComplete as introCompleteAtom } from './states';

function App() {
    const [introComplete] = useRecoilState(introCompleteAtom);
    const { ref: navbarRef, inView: navbarInView } = useInView();

    return (
        <>
            <div className="overlay" />
            <LeftSideColumn navbarInView={navbarInView} />
            <main className="content-space">
                <LandingPage ref={navbarRef} />
                {introComplete ? (
                    <>
                        <AboutPage />
                        <ExperiencePage />
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
