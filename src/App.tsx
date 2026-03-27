import './App.scss'
import AvatarImage from "./assets/midnatt-lantern-avatar.webp";

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
            <Footer/>
        </>
    )
}

export default App
