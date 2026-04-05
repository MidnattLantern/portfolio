import './CommissionedArtProjects.scss';
import CommissionedArtLibrary from "./commissioned-art-library.json";

export function CommissionedArtProjects() {
    const commissionedArtLibrary = CommissionedArtLibrary.map((project, index) => {
        return (
            <li key={index}>
                <article>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <img
                    src={`${import.meta.env.BASE_URL}${project.source}`}
                    alt={`Image of ${project.name}`}
                    title={`Image of ${project.name}`}
                    loading="lazy"
                    />
                </article>
            </li>
        )
    })

    return (
        <div className="commissioned-art-projects">
            <h2>Commissioned art projects</h2>
            <ul>
                {commissionedArtLibrary}
            </ul>
        </div>
    )
}