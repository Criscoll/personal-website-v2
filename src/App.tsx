import LandingPage from './pages/LandingPage';
import LeftSideColumn from './components/layout/LeftSideColumn';
import RightSideColumn from './components/layout/RightSideColumn';

function App() {
    return (
        <>
            <LeftSideColumn />
            <div className="content-space">
                <LandingPage />
                <LandingPage />
                <LandingPage />
            </div>
            <RightSideColumn />
        </>
    );
}

export default App;
