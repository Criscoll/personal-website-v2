import Logo from '../../assets/images/Logo.png';

export default function LeftSideColumn() {
    return (
        <>
            <div className="side-column-left-container">
                <img src={Logo} alt="logo" className="logo" />
            </div>
        </>
    );
}
