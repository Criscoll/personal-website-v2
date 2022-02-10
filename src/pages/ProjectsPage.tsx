import ProjectCard from "../components/card/ProjectCard";
import { pathfinderProject, sortingAlgoVisualiserProject, photoproProject } from "../constants/text";
import { useInView } from "react-intersection-observer";

export default function ProjectsPage() {
    const { ref: headerRef, inView: headerInView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <>
            <section className="projects-page-container" id="projects">
                <h1 className={` hide ${headerInView ? 'drop-in' : ''}`}
                    ref={headerRef}>{'> 02. Projects'}</h1>
                <ProjectCard {...pathfinderProject} />
                <ProjectCard {...sortingAlgoVisualiserProject} />
                <ProjectCard {...photoproProject} />
            </section>
        </>
    );
}
