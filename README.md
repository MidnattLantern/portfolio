# "Midnatt Lantern Portfolio"
Live link: https://MidnattLantern.github.io/portfolio

## About
This project is part of vocational training in frontend development

Developed by Alma Isaksson "Midnatt Lantern".

## Validation

- HTML Validated through https://validator.w3.org/#validate_by_input
- CSS validated thorugh https://jigsaw.w3.org/css-validator/#validate_by_input

Validation and semantics
The w3.org html validator return no complains. It can be assumed but not guaranteed that the HTML at its current state is likely semantic. 

## Internal Sources
Most assets, from vector graphics, to images, belong to the devloper, Alma Isaksson.

## External Sources
- ArtStation logo wide source: https://www.artstation.com/about/logo
- Pinterest logo wide source: https://commons.wikimedia.org/wiki/File:Pinterest_Logo.svg
- GitHub logo source: https://www.svgrepo.com/show/303615/github-icon-1-logo.svg
- LinkedIn logo source: https://www.svgrepo.com/vectors/linkedin
- ArtStation logo source: https://www.artstation.com/about/logo
- Media values: https://stackoverflow.com/questions/13637106/what-are-the-best-width-ranges-for-media-queries 
- Fonts borrowed from Google Fonts: **Roboto**, **Forum** https://fonts.google.com
- Normalizing Cascade Style Sheet borrowed from @devinschumacher: https://gist.github.com/devinschumacher/6cbd52c082040f0e4c414836aebdb36f#file-normalize-css 

The use of any logos are used under normative fair use, serving as direct links to the developers external profiles on said platforms.

## General Documentation

### Socials Aside & Project Articles:
"The aside content should be indirectly related to the surrounding content." https://www.w3schools.com/TAGS/tag_aside.asp

The page has four icons leading to the developers profiles on external platforms, providing information that is realted, but not crucial with the main content, as it could exist without it. For phone users, the aside appears at the end of the page, for larger devices, it's fixed centered to the right edge of the viewport.

Each "web project card" used to wrap information in an `<aside>` element. This has been replaced with `<article>`, a more semantic element for that purpose, since each card could not exist without its text and still make sense. Whether or not `<div>` is more appropriate can be debated, but article is self descriptive.

### Graphics Software:
Image assets compressed using Affinity Photo 2.

Vector assets and wireframes created/ designed using Affinity Designer 2.

Some SVG assets have been inlined, for instance when you need the fill color to change as you hover it.

To access the source code that makes up a SVG asset in VS Code, right/ secondary click the SVG file -> "Open With..." -> "Text Editor", and extract the code. Note that some metadata may be rejected by the HTML validator. For this project, it was fine erasing said metadata.

## Accessibility
Lighthouse reports may vary. Tested on "desktop":
- Performance: 96
- Accessibility: 100
- Best Practices: 100
- SEO: 100

![Chrome Lighthouse Report](./readme-assets/chrome-lighthouse-report.png)

Firefox accessibility report no issues.

![Firefox Accessibility Report](./readme-assets/firefox-accessibility-report.png)

To try accessibility on Mac, press `command` + `f5` then navigate around each element using the arrow keys while holding down `control` + `shift` + `option`.
