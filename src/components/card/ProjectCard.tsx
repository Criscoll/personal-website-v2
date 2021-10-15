import ImageBtn from "../ImageBtn";

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

    return <>
        <div className="project-card-container">
            <ImageBtn
                {...imgBtnProps}
            />
            <div className="project-description">{projectDescription}</div>
            <div className="project-tech-stack">{projectTechStack}</div>

        </div>
    </>

}

export default ProjectCard;