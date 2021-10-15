import ProjectCard from "../components/card/ProjectCard";

export default function ProjectsPage() {

    const projectCardProps = {
        imgBtnProps: {
            imgUrl: "https://drive.google.com/uc?export=view&id=1g2IkXiVfCdZXwlWmwumS-Dy_cLgQy3-w",
            altText: "Visual Pathfinder Cover",
            projectTitle: "Visual Pathfinder",
            href: "https://github.com/Criscoll/personal-website-v2"
        },
        projectDescription: "Lorem ipsum bich",
        projectTechStack: "Hi"
    }

    return (
        <>
            <section className="projects-page-container">
                <h1>{'> Projects'}</h1>
                <ProjectCard {...projectCardProps} />
                <ProjectCard {...projectCardProps} />
                <ProjectCard {...projectCardProps} />
            </section>
        </>
    );
}
