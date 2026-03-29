import "./ArtstationPinterestCards.scss";
import ArtStationLogoWide from "../../assets/artstation-logo-wide.svg?react";
import PinterestLogoWide from "../../assets/pinterest-logo-wide.svg?react";

export function ArtstationPinterestCards() {
    return (
        <div className="align-artstation-and-pinterest">
            <a href="https://www.artstation.com/midnight_lantern" target="_blank" rel="noopener noreferrer" aria-label="ArtStation's logo as an external link to Alma Midnatt Lantern's ArtStation portfolio page">
                <ArtStationLogoWide className="align-artstation-and-pinterest_artstation-logo"/>
                <span>artstation.com/midnight_lantern</span>
            </a>
            <a href="https://se.pinterest.com/midnatt_lantern/art-by-midnatt-lantern" target="_blank" rel="noopener noreferrer" aria-label="Pinterest's logo as an external link to Alma Midnatt Lantern's Pinterest portfolio page">
                <PinterestLogoWide className="align-artstation-and-pinterest_pinterest-logo"/>
                <span>pinterest.com/midnatt_lantern</span>
            </a>
        </div>
    )
}