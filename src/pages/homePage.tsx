import { useEffect } from "react";
import "./home.scss";
import AvatarImage from "../assets/midnatt-lantern-avatar.webp";
import { NavLink } from "react-router";
import { IllustrationIntroText } from "../components/illustration-intro-text/IllustrationIntroText";
import { ScrollingArtGallery } from "../components/scrolling-art-gallery/ScrollingArtGallery";
import { ArtstationPinterestCards } from "../components/artstation-pinterest-cards/ArtstationPinterestCards";
import { FrontendIntroText } from "../components/frontend-intro-text/FrontendIntroText";
import { WebProjectCards } from "../components/web-projects/WebProjects";

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
            <FrontendIntroText/>
            <WebProjectCards isPreview={true}/>
            <NavLink to="/frontend" className="read-more-link">
                <span>Read more</span>
            </NavLink>
        </section>
    )
}

function IllustrationPreview() {
    return (
        <section className="illustration-preview">
            <h2>Art & Illustration</h2>
            <IllustrationIntroText/>
            <ScrollingArtGallery/>
            <h3>Explore my art projects on my ArtStation and Pinterest pages:</h3>
            <ArtstationPinterestCards/>
            <NavLink to="/illustration" className="read-more-link">
                <span>Read more</span>
            </NavLink>
        </section>
    )
}

export function DisplayHomePage() {
    useEffect(() => {
        document.title = "Midnatt Lantern Portfolio";
    }, []);

    return (
        <>
            <LandingBanner/>
            <LandingNavigationSection/>
            <FrontendPreview/>
            <IllustrationPreview/>
        </>
    )
}