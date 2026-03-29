import { useEffect } from "react";
import "./illustrationPage.scss";

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
        <LandingBanner/>
    )
}