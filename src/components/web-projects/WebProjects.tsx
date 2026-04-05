import "./WebProjects.scss";
import MoraGoddessSnapshotImage from "../../assets/mora-goddess-snapshot.webp";
import KorainGodSnapshotImage from "../../assets/korain-god-snapshot.webp";
import MultiCoRosterSnapshotImage from "../../assets/multico-roster-snapshot.webp";
import DivinesofidoriaSnapshotImage from "../../assets/web-projects-snapshots/divinesofidoria-snapshot.webp";
import SilverroseAndNightshadeSnapshotImage from "../../assets/web-projects-snapshots/silverrose-and-nightshade-snapshot.webp";
import BudgetboardSnapshotImage from "../../assets/web-projects-snapshots/budgetboard-snapshot.webp";
import StrangerWoodsSnapshotImage from "../../assets/web-projects-snapshots/stranger-woods-snapshot.webp";

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
            <a
            href="https://midnattlantern.github.io/divinesofidoria/#/"
            target="_blank"
            rel="noopener noreferrer"
            className="web-projects_card web-projects_zag"
            aria-label="Link card to the Korain God web-project"
            >
                <article className="web-projects_project-info">
                    <h3>Divines Of Idoria</h3>
                    <p>Commissioned work. Web art gallery featuring illustrations for The World of Idoria.</p>
                    <span>
                        midnattlantern.github.io/divinesofidoria
                    </span>
                </article>
                <img
                src={DivinesofidoriaSnapshotImage}
                alt="Snapshot of the website Divines Of Idoria"
                title="Snapshot of the website Divines Of Idoria"
                className="web-projects_snapshot"
                loading="lazy"
                />
            </a>
            <a
            href="https://midnattlantern.github.io/silverrose-and-nightshade/"
            target="_blank"
            rel="noopener noreferrer"
            className="web-projects_card"
            aria-label="Link card to the Korain God web-project"
            >
                <article className="web-projects_project-info">
                    <h3>Silverrose & Nightshade</h3>
                    <p>Vocational training. Fantasy themed pretend e-commerce platform.</p>
                    <span>
                        midnattlantern.github.io/silverrose-and-nightshade
                    </span>
                </article>
                <img
                src={SilverroseAndNightshadeSnapshotImage}
                alt="Snapshot of the website Silverrose and Nightshade"
                title="Snapshot of the website Silverrose and Nightshade"
                className="web-projects_snapshot"
                loading="lazy"
                />
            </a>
            <a
            href="https://midnattlantern.github.io/budget-board/"
            target="_blank"
            rel="noopener noreferrer"
            className="web-projects_card web-projects_zag"
            aria-label="Link card to the Korain God web-project"
            >
                <article className="web-projects_project-info">
                    <h3>Budget Board</h3>
                    <p>Vocational training. Utlity web-app tracking incomes and expenses.</p>
                    <span>
                        midnattlantern.github.io/budget-board
                    </span>
                </article>
                <img
                src={BudgetboardSnapshotImage}
                alt="Snapshot of the website Budget Board"
                title="Snapshot of the website Budget Board"
                className="web-projects_snapshot"
                loading="lazy"
                />
            </a>
            <a
            href="https://medieinstitutet.github.io/fed25d-js-intro-grupparbete-the-dopefish-admirers/"
            target="_blank"
            rel="noopener noreferrer"
            className="web-projects_card"
            aria-label="Link card to the Korain God web-project"
            >
                <article className="web-projects_project-info">
                    <h3>Stranger Woods</h3>
                    <p>Vocational training, group project. Surreal forest themed digital escape room.</p>
                    <span>
                        medieinstitutet.github.io/fed25d-js-intro-grupparbete-the-dopefish-admirers/
                    </span>
                </article>
                <img
                src={StrangerWoodsSnapshotImage}
                alt="Snapshot of the website Stranger Woods"
                title="Snapshot of the website Stranger Woods"
                className="web-projects_snapshot"
                loading="lazy"
                />
            </a>
        </div>
    )
}