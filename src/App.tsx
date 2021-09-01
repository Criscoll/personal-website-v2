import { useState, useEffect } from 'react';

import LandingPage from './pages/LandingPage';
import LeftSideColumn from './components/layout/LeftSideColumn';
import RightSideColumn from './components/layout/RightSideColumn';

function App() {
    const [introComplete, setIntroComplete] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIntroComplete(true);
        }, 7000);
    }, []);

    return (
        <>
            <LeftSideColumn introComplete={introComplete} />
            <div className="content-space">
                <LandingPage introComplete={introComplete} />
                {introComplete ? (
                    <>
                        <LandingPage />
                        <LandingPage />
                    </>
                ) : null}
            </div>
            <RightSideColumn introComplete={introComplete} />
        </>
    );
}

export default App;
