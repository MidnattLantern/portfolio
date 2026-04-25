import "./CodeStack.scss";
import CodeStackLibrary from "./code-stack-library.json";

export function CodeStack() {
    const codeStackLibrary = CodeStackLibrary.map((techItem, index) => {
        const extensionItemIcon = <div className="code-stack__extension">
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
                    className={`${techItem.selfTaught && "code-stack__self-taught"}`}>
                        {techItem.extensionName ? extendedItemFigCaption : singleItemFigCaption}
                        {techItem.selfTaught && <span>{` (self taught)`}</span>}
                    </figcaption>
                </figure>
            </li>
        )
    })
    return (
        <ul className="code-stack">
            {codeStackLibrary}
        </ul>
    )
}