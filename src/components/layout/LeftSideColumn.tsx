import Logo from '../../assets/images/Logo.png';

interface IProps {
    introComplete?: boolean;
}

export default function LeftSideColumn({ introComplete }: IProps) {
    return (
        <>
            <div className="side-column-left-container">
                {introComplete ? (
                    <img src={Logo} alt="logo" className="logo" />
                ) : null}
            </div>
        </>
    );
}
