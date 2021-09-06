import { aboutme } from '../constants/text';
import parse from 'html-react-parser';
import ProfilePhoto from '../assets/images/profile-photo.jpg';
import React, { forwardRef } from 'react';

interface AboutMeProps {}

const AboutMe = forwardRef<HTMLHeadingElement, AboutMeProps>(
    (props, forwardedRef) => {
        return (
            <>
                <section className="about-page-container">
                    <div className="inner-container">
                        <h1 ref={forwardedRef}>{' > 01. About Me'}</h1>
                        <div className="content">
                            <div className="text-content">
                                <p>{parse(aboutme)}</p>
                            </div>
                            <div className="image-content">
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
);

export default AboutMe;
