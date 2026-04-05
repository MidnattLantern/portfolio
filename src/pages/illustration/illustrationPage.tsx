import { useEffect } from "react";
import "./illustrationPage.scss";
import { IllustrationIntroText } from "../../components/illustration-intro-text/IllustrationIntroText";
import { ScrollingArtGallery } from "../../components/scrolling-art-gallery/ScrollingArtGallery";
import { ArtstationPinterestCards } from "../../components/artstation-pinterest-cards/ArtstationPinterestCards";
import { CommissionedArtProjects } from "../../components/commissioned-art-projects/CommissionedArtProjects";

function LandingBanner() {
    return (
        <section className="illustration-landing-banner">
            <h1>Art & Illustration</h1>
        </section>
    )
}

export function DisplayIllustrationPage() {
    useEffect(() => {
        document.title = "Midnatt Lantern | Illustration";
        window.scrollTo(0,0);
    }, []);

    return (
        <>
            <LandingBanner/>
            <div className="illustration-page">
                <IllustrationIntroText/>
                <ScrollingArtGallery/>
                <CommissionedArtProjects/>
                <h3>Explore my art projects on my ArtStation and Pinterest pages:</h3>
                <ArtstationPinterestCards/>
            </div>
        </>
    )
}