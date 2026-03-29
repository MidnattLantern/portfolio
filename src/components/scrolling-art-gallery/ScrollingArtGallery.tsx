import "./ScrollingArtGallery.scss";
import NicoletteImage from "../../assets/nicolette.webp";
import MoreBustImage from "../../assets/mora-goddess-bust-portrait.webp";
import FeatheredEarsImage from "../../assets/feathered-ears.webp";
import InfiniteBreadImage from "../../assets/infinite-bread-avatar.webp";
import IvyGraveyardImage from "../../assets/ivy-graveyard.webp";
import HairAndEyesImage from "../../assets/hair-and-eyes.webp";

export function ScrollingArtGallery() {
    return (
        <div className="scrolling-art-gallery">
            <img
            src={NicoletteImage}
            alt="Painting of a girl with red and clothes holding a rapier"
            title="Nicolette"
            loading="lazy"
            />
            <img
            src={MoreBustImage}
            alt="Painting of a goddess with ten arms and blue-pink flowing hair"
            title="Mora Goddess Bust Portrait"
            loading="lazy"
            />
            <img
            src={FeatheredEarsImage}
            alt="Painting of a red haired figure facing sideways, red hairs and massive black leaves covering their eyes"
            title="Feathered Ears"
            loading="lazy"
            />
            <img
            src={InfiniteBreadImage}
            alt="Painting of a sci-fi warrior in a leap carrying a massive sword"
            title="Infinite bread avatar"
            loading="lazy"
            />
            <img
            src={IvyGraveyardImage}
            alt="Painting of a red surreal landscape with a massive laying hand and a small character"
            title="Ivy graveyard"
            loading="lazy"
            />
            <img
            src={HairAndEyesImage}
            alt="Painting of a figure with horns and long hair covering the figure's body and surreal eyes resting on the figure's hair"
            title="Hair and eyes"
            loading="lazy"
            />
        </div>
    )
}