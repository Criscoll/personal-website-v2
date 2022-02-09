import ProjectCard from "../components/card/ProjectCard";
import { pathfinderProject, sortingAlgoVisualiserProject, photoproProject } from "../constants/text";

export default function ProjectsPage() {


    return (
        <>
            <section className="projects-page-container">
                <h1>{'> 02. Projects'}</h1>
                <ProjectCard {...pathfinderProject} />
                <ProjectCard {...sortingAlgoVisualiserProject} />
                <ProjectCard {...photoproProject} />
            </section>
        </>
    );
}
