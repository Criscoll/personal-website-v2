import { aboutIntro, aboutSkills } from '../constants/text';
import parse from 'html-react-parser';
import ProfilePhoto from '../assets/images/profile-photo.jpg';
import { useInView } from 'react-intersection-observer';

export default function AboutMe() {
    const { ref: headerRef, inView: headerInView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const { ref: textRef, inView: textInView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    const { ref: imageRef, inView: imageInView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <>
            <section className="about-page-container" id="about">
                <div className="inner-container">
                    <h1
                        className={` hide ${headerInView ? 'drop-in' : ''}`}
                        ref={headerRef}
                    >
                        {' > 01. About Me'}
                    </h1>
                    <div className="content">
                        <div
                            className={`text-content hide ${textInView ? 'drop-in' : ''
                                }`}
                            ref={textRef}
                        >
                            <p>{parse(aboutIntro)}</p>
                            {/* <div className="skills-list">
                                {parse(aboutSkills)}
                            </div> */}
                        </div>
                        <div
                            className={`image-content hide ${imageInView ? 'drop-in' : ''
                                }`}
                            ref={imageRef}
                        >
                            <img
                                src={ProfilePhoto}
                                alt="profile"
                                width="450px"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
