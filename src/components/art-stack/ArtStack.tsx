import "./ArtStack.scss";
import ArtStackLibrary from "./art-stack-library.json";

export function ArtStack() {
    const artStackLibrary = ArtStackLibrary.map((techItem, index) => {

        const singleItemFigCaption: string = techItem.name;

        return (
            <li key={index}>
                <figure>
                    <img src={techItem.href} title={techItem.name} alt={techItem.name} loading="lazy"/>
                    <figcaption
                    className={`${techItem.selfTaught && "art-stack__self-taught"}`}>
                        {singleItemFigCaption}
                        {techItem.selfTaught && <span>{` (self taught)`}</span>}
                    </figcaption>
                </figure>
            </li>
        )
    })
    return (
        <ul className="art-stack">
            {artStackLibrary}
        </ul>
    )
}