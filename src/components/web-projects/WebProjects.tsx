import "./WebProjects.scss";
import MoraGoddessSnapshotImage from "../../assets/mora-goddess-snapshot.webp";
import KorainGodSnapshotImage from "../../assets/korain-god-snapshot.webp";
import MultiCoRosterSnapshotImage from "../../assets/multico-roster-snapshot.webp";

export function WebProjectCards() {
    return (
        <div className="web-projects">
            <a
            href="https://midnattlantern.github.io/mora-goddess"
            target="_blank"
            rel="noopener noreferrer"
            className="web-projects_card"
            aria-label="Link card to the Korain God web-project"
            >
                <article className="web-projects_project-info">
                    <h3>Mora Goddess</h3>
                    <p>Commissioned work. Web art gallery featuring five illustrations.</p>
                    <span>
                        midnattlantern.github.io/mora-goddess
                    </span>
                </article>
                <img
                src={MoraGoddessSnapshotImage}
                alt="Snapshot of the website Mora Goddess"
                title="Snapshot of the website Mora Goddess"
                className="web-projects_snapshot"
                loading="lazy"
                />
            </a>
            <a
            href="https://midnattlantern.github.io/korain-god"
            target="_blank"
            rel="noopener noreferrer"
            className="web-projects_card web-projects_zag"
            aria-label="Link card to the Korain God web-project"
            >
                <article className="web-projects_project-info">
                    <h3>Korain God</h3>
                    <p>Commissioned work. Web art gallery featuring five illustrations.</p>
                    <span>
                        midnattlantern.github.io/korain-god
                    </span>
                </article>
                <img
                src={KorainGodSnapshotImage}
                alt="Snapshot of the website Korain God"
                title="Snapshot of the website Korain God"
                className="web-projects_snapshot"
                loading="lazy"
                />
            </a>
            <a
            href="https://midnattlantern.github.io/multico-roster"
            target="_blank"
            rel="noopener noreferrer"
            className="web-projects_card"
            aria-label="Link card to the Korain God web-project"
            >
                <article className="web-projects_project-info">
                    <h3>MultiCo Roster</h3>
                    <p>Volunteer/ Personal project. Hero roster in collaboration with friends.</p>
                    <span>
                        midnattlantern.github.io/multico-roster
                    </span>
                </article>
                <img
                src={MultiCoRosterSnapshotImage}
                alt="Snapshot of the website MultiCo Roster"
                title="Snapshot of the website MultiCo Roster"
                className="web-projects_snapshot"
                loading="lazy"
                />
            </a>
        </div>
    )
}