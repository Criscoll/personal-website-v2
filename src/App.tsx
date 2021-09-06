import { useEffect, useState } from 'react';

import LeftSideColumn from './components/layout/LeftSideColumn';
import RightSideColumn from './components/layout/RightSideColumn';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import { useInView } from 'react-intersection-observer';

function App() {
    const [introComplete, setIntroComplete] = useState(false);
    const { ref: aboutRef, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        console.log(inView);
    }, [inView]);

    return (
        <>
            <div className="overlay" />
            <LeftSideColumn introComplete={introComplete} />
            <div className="content-space">
                <LandingPage
                    introComplete={introComplete}
                    setIntroComplete={() => {
                        setIntroComplete(true);
                    }}
                />
                {introComplete ? (
                    <>
                        <AboutPage ref={aboutRef} />
                        <ExperiencePage />
                        <ProjectsPage />
                    </>
                ) : null}
            </div>
            <RightSideColumn introComplete={introComplete} />
        </>
    );
}

export default App;
