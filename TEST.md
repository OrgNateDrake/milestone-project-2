# Lights Out 

[GitHub](https://orgnatedrake.github.io/milestone-project-2/)

This is the TEST file for a three-page website, with a Lights Out browser game within. **Themes: City Lights, Mars Attacks, and Jungle.**
## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Deployment](#deployment)
- [Testing](#testing)
  - [W3C](#w3c)
  - [Accessibility](#accessibility)
- [Bugs](#bugs)
- [Contributing and Maintenance](#contributing-and-maintenance)

## Getting Started

To get a copy of this project up and running on your local machine, follow these steps.
### Prerequisites

- Web browser (Chrome, Firefox, Safari, etc.)
- Text editor or IDE (Visual Studio Code, Sublime Text, Atom, etc.)
### Installation

1. Clone my repository:

[Git Clone](https://github.com/OrgNateDrake/milestone-project-2)

2. Open the project in your preferred text editor or IDE.
### Deployment

You can view the live site through **GitHub Pages**, using the following link; 

[Live Site](https://orgnatedrake.github.io/milestone-project-2)

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published [site link](https://github.com) in the "GitHub Pages" section.
## Testing

- The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
- The website was viewed on a variety of devices such as Desktop, Laptop, Tablets, iPhone 8 and iPhone 14 Pro Max.
- A large amount of testing was done to ensure that all pages were linking correctly.
- Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.
### W3C

Within W3C's validators. I have fully tested the one **CSS** stylesheet via the **Direct Input** method. I have also fully tested all three **HTML** pages via the **URI Input** method. No fails were found and all warnings were fully resolved and have now **passed all checks**.

![W3C CSS Validation](/assets/docs/lights-out-css-pass.jpeg)

[CSS Validator](https://jigsaw.w3.org/css-validator/)

![W3C HTML Validation](/assets/docs/lights-out-html-pass.jpeg)

[HTML Validator](https://validator.w3.org)
### Accessibility and Performance

![I Am Responsive](/assets/docs/responsive-demo.jpeg)

**PageSpeed Insight**

![PageSpeed Insight](/assets/docs/pagespeed-insight.jpeg)

[PageSpeed](https://pagespeed.web.dev)

After testing my website and the Lights Out browser game within, I have found that performance was slower than expected.

The slower-than-expected performance during website loading can be attributed to the resource-intensive nature of the JavaScript code responsible for running the browser game. As the game utilises complex logic and graphics, it requires a substantial amount of processing power and memory allocation, thereby affecting the overall loading speed of the website.

*More information about this issue is detailed within the **Bugs** section below*

**Wave**

I have also tested this site with **Wave** for accessibility and performance. Major contrast issues were corrected and the 5 remaining contrast issues were thought not to be of concern.

![Wave Test Results](/assets/docs/wave-test.jpeg)

[Wave](https://wave.webaim.org)

**JSLint**

I have passed all Java Script code through **JSLint** and only 2 warnings were reported, with no fundamental errors reported. The warnings are not of concern, as the code correctly runs without issue.

![JSLint Test Results](/assets/docs/jslint-check.jpeg)

[JSLint](https://www.jslint.com)
## Bugs

**Overall Performance**

One effective strategy to address the slower than expected performance challenge, and which will be implemented in future updates, is code splitting.

Code splitting involves breaking down the JavaScript codebase into smaller, more manageable chunks. By doing so, I can prioritise the loading of essential components required for the initial page render, while deferring the loading of non-essential components, such as the browser game code, until they are actually needed. This approach optimises the initial loading speed of the website, providing users with a faster and smoother experience upon arrival.

Incorporating code splitting not only enhances the website's performance but also improves user engagement by reducing the perceived load time. Through this proactive measure, I aim to strike a balance between offering feature-rich content like the browser game and ensuring an optimal user experience, particularly for visitors accessing the website on various devices and network conditions.
## Contributing and Maintenance

I welcome contributions from anyone interested in improving this project. Feel free to open issues and submit pull requests to suggest changes, report bugs, or add new features.

Maintenance will be completed regularly, to update code and external links where necessary.