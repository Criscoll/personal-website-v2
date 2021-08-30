import emailIcon from '../../assets/images/email-icon-white.png';
import linkedinIcon from '../../assets/images/linkedin-icon-white.png';
import githubIcon from '../../assets/images/github-icon-white.png';

export default function RightSideColumn() {
    return (
        <>
            <div className="side-column-right-container">
                <div className="resume">
                    <p>Resume</p>
                </div>
                <div className="contact-icons">
                    <img src={emailIcon} alt="email" width="35px" />
                    <img src={linkedinIcon} alt="linkedin" width="35px" />
                    <img src={githubIcon} alt="github" width="35px" />
                </div>
            </div>
        </>
    );
}
