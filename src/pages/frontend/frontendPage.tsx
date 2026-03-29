import { useEffect } from "react";
import "./frontendPage.scss";
import { FrontendIntroText } from "../../components/frontend-intro-text/FrontendIntroText";

function LandingBanner() {
    return (
        <section className="frontend-landing-banner">
            <h1>Frontend Development</h1>
        </section>
    )
}

export function DisplayFrontendPage() {
    useEffect(() => {
        document.title = "Midnatt Lantern | Frontend";
        window.scrollTo(0,0);
    }, []);

    return (
        <>
            <LandingBanner/>
            <div className="frontend-page">
                <FrontendIntroText/>
            </div>
        </>
    )
}