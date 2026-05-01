import "./WebProjects.scss";
import WebProjectsLibrary from "./web-projects.json";

interface Iprops {
    isPreview?: boolean;
}

interface ITechStack {
    name: string,
    href: string
}

function TechStack({stack}: {stack : ITechStack[]}) {
    return (
        <ul>
            {stack.map((item, index) => (
                <li key={index}>{item.name}</li>
            ))}
        </ul>
    )
};

export function WebProjectCards({isPreview = false}: Iprops) {

    const generatedWebProjects = WebProjectsLibrary.map((project, index) => {
        return (
            <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`web-projects_card ${index % 2 !== 0 ? "web-projects_zag" : ""}`}
                aria-label={`Link card to the ${project.name} web-project`}
                >
                <article className="web-projects_project-info">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    {project["tech-stack"] && <TechStack stack={project["tech-stack"]}/>}
                    <span>
                        {project["url-label"]}
                    </span>
                </article>
                <img
                src={`${import.meta.env.BASE_URL}${project.snapshot}`}
                alt={`Snapshot of the website ${project.name}`}
                title={`Snapshot of the website ${project.name}`}
                className="web-projects_snapshot"
                loading="lazy"
                />
            </a>
        )
    })
    
    return (
        <>
            { isPreview ? (generatedWebProjects.slice(0, 3)) : (generatedWebProjects) /* Only show 3 items in preview */}
        </>
    )
}