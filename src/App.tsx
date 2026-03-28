import { NavLink } from 'react-router';
import './App.scss'
import AvatarImage from "./assets/midnatt-lantern-avatar.webp";
import FullStackImage from "./assets/full-stack.webp";
import MoraGoddessSnapshotImage from "./assets/mora-goddess-snapshot.webp";
import KorainGodSnapshotImage from "./assets/korain-god-snapshot.webp";
import MultiCoRosterSnapshotImage from "./assets/multico-roster-snapshot.webp";

function LandingBanner() {
    return (
        <section className="landing-banner">
            <h1>
                <span className="landing-banner_break-heading">
                    <span>Alma</span>
                    <span>Isaksson</span>
                </span>
                <span className="landing-banner_break-heading">
                    <span>Midnatt</span>
                    <span>Lantern</span>
                </span>
            </h1>
            <img
            src={AvatarImage}
            alt="Close up illustration of a person with red hair, eyes closed, and a black rose covering their face"
            title="Midnatt Lantern"
            className="landing-banner_avatar"
            loading="lazy"
            />
            <h2>Developer by mind, artist by heart</h2>
            <div className="landing-banner_text-alignment">
                <p>Rooted in graphic design and digital art, with creative problem solving strengthened through formal training in web development, I approach digital mediums with care, intention, and attention to detail, to forge meaningful digital experiences.</p>
                <p>Since 2018, I, "Midnatt Lantern" have worked on client commissions and collaborative projects creating expressive illustrations and websites serving a purpose.</p>
            </div>
        </section>
    )
}

function LandingNavigationSection() {
    return (
        <section className="landing-navigation">
            <nav>
                <NavLink to={"/frontend"} className="landing-navigation_frontend-banner">
                    <span>Frontend Development</span>
                </NavLink>
                <NavLink to={"/illustration"} className="landing-navigation_illustration-banner">
                    <span>Art & Illustration</span>
                </NavLink>
            </nav>
        </section>
    )
}

function FrontendPreview() {
    return (
        <section className="frontend-preview">
            <h2>Frontend Development</h2>
            <div className="frontend-preview_text-alignment">
                <p>With formal training in web development, I boast a diploma from Code Institute's Full Stack bootcamp (60 SCQF). As of today, I'm attending vocational training at Medieinstitutet to specialize in UX and frontend development.</p>
                <p>Programming to me can be as tingly as ASMR, occupying my leisure time as well. I spend time outside work or school developing my own projects, alone and with friends, or learn new languages and frameworks. Take a look at some of my projects down below:</p>
            </div>
            <img
            src={FullStackImage}
            alt="HTML, CSS, JavaScript, TypeScript, Python, C Sharp, React, NodeJS, GitHub"
            title="Full stack"
            className="frontend-preview_full-stack-image"
            loading="lazy"
            />
            <a
            href="https://midnattlantern.github.io/mora-goddess"
            target="_blank"
            rel="noopener noreferrer"
            className="frontend-preview_web-project-card"
            aria-label="Link card to the Korain God web-project"
            >
                <article className="frontend-preview_web-project-info">
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
                className="frontend-preview_web-project-snapshot"
                loading="lazy"
                />
            </a>
            <a
            href="https://midnattlantern.github.io/korain-god"
            target="_blank"
            rel="noopener noreferrer"
            className="frontend-preview_web-project-card frontend-preview_zag"
            aria-label="Link card to the Korain God web-project"
            >
                <article className="frontend-preview_web-project-info">
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
                className="frontend-preview_web-project-snapshot"
                loading="lazy"
                />
            </a>
            <a
            href="https://midnattlantern.github.io/multico-roster"
            target="_blank"
            rel="noopener noreferrer"
            className="frontend-preview_web-project-card"
            aria-label="Link card to the MultiCo Roster web-project"
            >
                <article className="frontend-preview_web-project-info">
                    <h3>MultiCo Roster</h3>
                    <p>Volunteer/ Personal project. Hero roster in collaboration with friends.</p>
                    <span className="newtab-icon">
                        midnattlantern.github.io/multico-roster
                    </span>
                </article>
                <img
                src={MultiCoRosterSnapshotImage}
                alt="Snapshot of the website MultiCo Roster"
                title="Snapshot of the website MultiCo Roster"
                className="frontend-preview_web-project-snapshot"
                loading="lazy"
                />
            </a>
            <NavLink to="/frontend">
                <span>Read more</span>
            </NavLink>
        </section>
    )
}

function Footer() {
    function handleCopyDiscordUsername() {
        navigator.clipboard.writeText("midnatt_lantern");
    };

    return (
        <footer>
            <p>Alma Isaksson - 2026</p>
            <p>Email: <a href="mailto:MidnattLantern@proton.me" aria-label="developer's email address">MidnattLantern@proton.me</a></p>
            <p>Discord username: <span role="button" tabIndex={0} className="discord-username" onClick={handleCopyDiscordUsername}>midnatt_lantern</span></p>
            <p>GitHub: <a href="https://github.com/MidnattLantern" target="_blank">MidnattLantern</a></p>
        </footer>
    )
}

function App() {

    return (
        <>
            <LandingBanner/>
            <LandingNavigationSection/>
            <FrontendPreview/>
            <Footer/>
        </>
    )
}

export default App
