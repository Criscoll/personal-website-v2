import { aboutme } from '../constants/text';
import parse from 'html-react-parser';
import ProfilePhoto from '../assets/images/profile-photo.jpg';

export default function AboutPage() {
    return (
        <>
            <section className="about-page-container">
                <div className="inner-container">
                    <h1>{' > 01. About Me'}</h1>
                    <div className="text-content">
                        <p>{parse(aboutme)}</p>
                    </div>
                    <div className="image-content">
                        <img src={ProfilePhoto} alt="profile photo" />
                    </div>
                </div>
            </section>
        </>
    );
}
