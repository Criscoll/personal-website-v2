import { useState } from 'react';

import LandingPage from './pages/LandingPage';
import LeftSideColumn from './components/layout/LeftSideColumn';
import RightSideColumn from './components/layout/RightSideColumn';

function App() {
    const [introComplete, setIntroComplete] = useState(false);

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
                        <LandingPage
                            setIntroComplete={() => {
                                setIntroComplete(true);
                            }}
                        />
                        <LandingPage
                            setIntroComplete={() => {
                                setIntroComplete(true);
                            }}
                        />
                    </>
                ) : null}
            </div>
            <RightSideColumn introComplete={introComplete} />
        </>
    );
}

export default App;
