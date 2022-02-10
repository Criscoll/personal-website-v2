import ImageBtn from "../ImageBtn";
import parse from 'html-react-parser';
import { useInView } from 'react-intersection-observer';

interface ProjectCardProps {
    imgBtnProps: {
        imgUrl: string,
        altText: string,
        projectTitle: string,
        href: string
    }
    projectDescription: string,
    projectTechStack: string
}

const ProjectCard = ({ imgBtnProps, projectDescription, projectTechStack }: ProjectCardProps) => {
    const { ref: projectCardRef, inView: projectCardInView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    return <>
        <div ref={projectCardRef}
            className={` project-card-container hide ${projectCardInView ? 'drop-in' : ''}`}
        >
            <ImageBtn
                {...imgBtnProps}
            />
            <div className="project-description"><p>{projectDescription}</p></div>
            <div className="project-tech-stack">{parse(projectTechStack)}</div>

        </div>
    </>

}

export default ProjectCard;