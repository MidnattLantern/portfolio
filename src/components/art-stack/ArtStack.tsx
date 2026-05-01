import "./ArtStack.scss";
import ArtStackLibrary from "./art-stack-library.json";

export function ArtStack() {
    const artStackLibrary = ArtStackLibrary.map((techItem, index) => {
        const extensionItemIcon = <div className="art-stack__extension">
            <span>&</span>
            <img src={techItem.extensionHref} title={techItem.extensionName} alt={techItem.extensionName} loading="lazy"/>
        </div>

        const singleItemFigCaption: string = techItem.name;
        const extendedItemFigCaption: string = `${techItem.name} & ${techItem.extensionName}`

        return (
            <li key={index}>
                <figure>
                    <img src={techItem.href} title={techItem.name} alt={techItem.name} loading="lazy"/>
                    {techItem.extensionHref && extensionItemIcon}
                    <figcaption
                    className={`${techItem.selfTaught && "art-stack__self-taught"}`}>
                        {techItem.extensionName ? extendedItemFigCaption : singleItemFigCaption}
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