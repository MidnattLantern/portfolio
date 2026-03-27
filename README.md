# "Midnatt Lantern Portfolio"
Live link: https://MidnattLantern.github.io/portfolio

## About
This project is part of vocational training to demonstrate my skills in writing solid and effective HTMl and CSS without using a single line of JavaScript, as well as implimenting accessibility and performance.

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

## Disclosure

### Artificial Intelligence Disclosure:
Services such as ChatGPT was involved alongside traditional internet search engines, like DuckDuckGo, exclusively to acquire technical information. Such as what an element or styling property does, how to use it, some tips and tricks, and feedback if the use of elements is semantic and or recommended, in the same way as you acquire information and tips and tricks from traditional search engines and forums. Due to the risk of conflicts of agreement and AI hallucination/ misinformation, no code snippet generated from ChatGPT or shared on web forums were directly copy-pasted, but occationally referenced after studying, verifying and understanding its meaning on a deep personal level.

### Other Disclosures:
- There are many conflicts and debates across the internet, AI chatbots, and personal first-hand experience on what is best practice and what works. It cannot be guaranteed that the quality of the code for this project is perfectly semantic and optimal. Be aware of potenial unintended misuse/ misinformation and bad practice of the code. Feedback is encouraged.
- While adviced to only keep one rel="preconnect" when importing Google Fonts, removing either cause w3 validation error, hence there are two rel="preconnect" at the font import.
- Same issue regarding rel="preconnect", keeping it for the font imports decreases Lighthouse "performance" grade by around 5 points, while removing it breaks the import, causing the webpage to fall back on to the next font in line of the font family. This preconenct will stay with the compromise of losing many Lighthouse points and remain within a yellow "performance" grade when testing for "Mobile". However, Lighthouse will give a green "performance" grade when testing for "Desktop".
- Some accessibility checkers may complain about "art gallery" being inaccessible. This does not match practical testing, as tabbing to that windows does focus on the "art gallery" element (tested on MacBook Air M1).

![HTML Validation Report](./readme-assets/html-validation-report.png)

![CSS Validation Report](./readme-assets/css-validation-report.png)

## Unaddressed/ future fixes:
- Web-project cards have underline text decoration during hover and focus in desktop view.
- Inconsistent alignment on the contact-me form. Some classes have gotten "temporary solution" margins, but it is worth considering fixing the proper alignment in the future.
- Learn how to use the `srcset=""` attribute for images to optimize performance based on the device size.
- Cleaner CSS, as its current state can be messy.
- any class of "reader-view-only" won't display hidden text until refresh