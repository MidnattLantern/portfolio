import { useEffect } from "react";
import "./illustrationPage.scss";
import { IllustrationIntroText } from "../../components/illustration-intro-text/IllustrationIntroText";
import { ScrollingArtGallery } from "../../components/scrolling-art-gallery/ScrollingArtGallery";
import { ArtstationPinterestCards } from "../../components/artstation-pinterest-cards/ArtstationPinterestCards";

function LandingBanner () {
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
                <ArtstationPinterestCards/>
            </div>
        </>
    )
}