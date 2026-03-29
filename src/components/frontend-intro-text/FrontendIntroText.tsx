import "./FrontendIntroText.scss";
import FullStackImage from "../../assets/full-stack.webp";

export function FrontendIntroText() {
    return (
        <div className="frontend-intro-text">
            <div className="frontend-intro-text_alignment">
                <p>With formal training in web development, I boast a diploma from Code Institute's Full Stack bootcamp (60 SCQF). As of today, I'm attending vocational training at Medieinstitutet to specialize in UX and frontend development.</p>
                <p>Programming to me can be as tingly as ASMR, occupying my leisure time as well. I spend time outside work or school developing my own projects, alone and with friends, or learn new languages and frameworks. Take a look at some of my projects down below:</p>
            </div>
            <img
            src={FullStackImage}
            alt="HTML, CSS, JavaScript, TypeScript, Python, C Sharp, React, NodeJS, GitHub"
            title="Full stack"
            className="frontend-intro-text_full-stack-image"
            loading="lazy"
            />
        </div>
    )
}