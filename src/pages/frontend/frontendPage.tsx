import { useEffect } from "react";
import "./frontendPage.scss";

export function DisplayFrontendPage() {
    useEffect(() => {
        document.title = "Midnatt Lantern | Frontend";
        window.scrollTo(0,0);
    }, []);

    return (
        <h1>Frontend Development</h1>
    )
}