import { useEffect } from "react";
import "./illustrationPage.scss";

export function DisplayIllustrationPage() {
    useEffect(() => {
        document.title = "Midnatt Lantern | Illustration";
    }, []);

    return (
        <h1>Art & Illustration</h1>
    )
}