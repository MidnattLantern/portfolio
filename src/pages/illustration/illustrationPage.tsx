import { useEffect } from "react";
import "./illustrationPage.scss";
import { IllustrationIntroText } from "../../components/illustration-intro-text/IllustrationIntroText";

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
    }, []);

    return (
        <>
            <LandingBanner/>
            <div className="illustration-page">
                <IllustrationIntroText/>
            </div>
        </>
    )
}