import "./ScrollingArtGallery.scss";
import ArtGallery from "./scrolling-art-library.json";

export function ScrollingArtGallery() {
    const artGallery = ArtGallery.map((project, index) => {
        return (
            <img
            key={index}
            src={`${import.meta.env.BASE_URL}${project.source}`}
            alt={project.description}
            title={project.name}
            loading="lazy"
            />
        )
    })

    return (
        <>
            <div className="scrolling-art-gallery">
                <div className="scrolling-art-gallery_track">
                    {artGallery}
                    {artGallery} {/* duplicate for seamless loop */}
                </div>
            </div>
        </>
    )
}