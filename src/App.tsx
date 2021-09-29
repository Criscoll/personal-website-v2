import { useState } from 'react';
import LeftSideColumn from './components/layout/LeftSideColumn';
import RightSideColumn from './components/layout/RightSideColumn';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import MobileNavbar from './components/navigation/MobileNavbar';
import { useInView } from 'react-intersection-observer';

function App() {
    const [introComplete, setIntroComplete] = useState(false);
    const { ref: navbarRef, inView: navbarInView } = useInView();


    return (
        <>
            <div className="overlay" />
            <LeftSideColumn introComplete={introComplete} navbarInView={navbarInView} />
            <main className="content-space">
                <LandingPage
                    ref={navbarRef}
                    introComplete={introComplete}
                    setIntroComplete={() => {
                        setIntroComplete(true);
                    }}
                />
                {introComplete ? (
                    <>
                        <AboutPage />
                        <ExperiencePage />
                        <ProjectsPage />
                    </>
                ) : null}
            </main>
            <MobileNavbar introComplete={introComplete} />
            <RightSideColumn introComplete={introComplete} />
        </>
    );
}

export default App;
