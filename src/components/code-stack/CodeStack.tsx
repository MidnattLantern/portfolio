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
                    <figcaption>{techItem.extensionName ? extendedItemFigCaption : singleItemFigCaption}</figcaption>
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