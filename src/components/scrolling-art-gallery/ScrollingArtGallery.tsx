import "./ScrollingArtGallery.scss";
import ArtGallery from "./scrolling-art-library.json";

export function ScrollingArtGallery() {
    const artGallery = ArtGallery.map((project, index) => {
        return (
            <img
            key={index}
            src={project.source}
            alt={project.description}
            title={project.name}
            loading="lazy"
            />
        )
    })

    return (
        <div className="scrolling-art-gallery">
            {artGallery}
        </div>
    )
}