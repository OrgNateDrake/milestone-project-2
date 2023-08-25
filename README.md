# Lights Out

[GitHub](https://orgnatedrake.github.io/milestone-project-2/)

This is the README file for a three-page website, with a Lights Out browser game within. **Themes: City Lights, Mars Attacks, and Jungle.**

![I Am Responsive](/assets/docs/responsive-demo.jpeg)

[Am I Responsive](https://ui.dev/amiresponsive?url=https://orgnatedrake.github.io/milestone-project-2/)
## Table of Contents

- [Introduction](#introduction)
  - [Programming Languages](#programming-languages)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Deployment](#deployment)
- [User Experience UX](#user-experience-ux)
  - [User Stories](#user-stories)
  - [Design Choices](#design-choices)
  - [HEX Colors and Fonts](#hex-colors-and-fonts)
- [Wireframes](#wireframes)
  - [Desktop/Tablet Browser Game](#desktop/tablet-browser-game)
  - [Mobile Browser Game](#mobile-browser-game)
- [Attribution](#attribution)
- [Contributing and Maintenance](#contributing-and-maintenance)
## Introduction

Imagine a captivating three-page website that boasts a mesmerizing JavaScript game known as "Lights Out". The website's minimalist yet elegant design draws users in with its clean interface and soothing color palettes. Upon entering the game page, players are immersed in the challenge of "Lights Out," a clever puzzle that demands strategic thinking. The game grid, '5x5' delicately aligned with clickable tiles, commands attention at the center of the page. As players engage with the game, the intelligent use of JavaScript brings the puzzle to life, creating an interactive experience that's both intellectually stimulating and visually engaging. Overall, this three-page website artfully balances simplicity and interactivity, making it an irresistible hub for fans of brain-teasing games like "Lights Out.
## Programming Languages

1. **HTML5**
2. **Bootstrap v5.3**
3. **CSS3**
4. **JS**
## Features

- Main Game: Overall, this three-page website artfully balances simplicity and interactivity, making it an irresistible hub for fans of  brain-teasing games like "Lights Out."
- Themes: Three themes for users to choose from; **City Lights**, **Jungle** and **Mars Attacks**. 
- Social Links: Vibrant and animated social links for users to navigate to.
- Fully Responsive: Across **Mobile**, **Tablet** and **Desktop** devices.
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
## User Experience UX
### User Stories

**Title:** Lights Out - Mobile Puzzle Game

**User Story 1: Starting the Game**
  **As** a player,
  **I want** to launch the Lights Out game on my mobile or desktop device,
  **So that** I can start playing the game quickly.

**Test Case:**
  **Given** the game is loaded within my mobile or desktop device's browser window,
  **When** I visit the game's website or use a saved bookmark in my browser,
  **Then** the game should load without errors,
  **And** the main game screen with a grid of light tiles should be displayed.

**User Story 2: Gameplay Mechanics**
  **As** a player,
  **I want** to tap a light tile to toggle its state and adjacent tiles,
  **So that** I can progress through the game by turning off all the lights.

**Test Case:**
  **Given** I am on the main game screen,
  **When** I tap a light tile,
  **Then** the selected light tile should toggle its state,
  **And** the adjacent light tiles (up, down, left, right) should also toggle their states.

**User Story 3: Objective Completion**
  **As** a player,
  **I want** to turn off all the lights on the grid,
  **So that** I can complete the level and receive a congratulations message.

**Test Case:**
  **Given** a level with a grid of lights,
  **When** I toggle the lights in a strategic manner,
  **And** all lights are turned off,
  **Then** a victory message should be displayed,
  **And** I should be able to proceed to the next level if applicable.

**User Story 4: Level Progression (Optional)**
  **As** a player,
  **I want** to be rewarded and challenged as I complete levels,
  **So that** I can experience a sense of accomplishment and enjoy increasing difficulty.

**Test Case:**
  **Given** I complete a level by turning off all lights,
  **When** the level ends,
  **Then** a congratulatory message should be displayed,
  **And** the next level, with a larger grid and more complex patterns, should be unlocked and available to play.

**User Story 5: Hint System**
  **As** a player,
  **I want** to receive hints when I'm stuck on a level,
  **So that** I can progress through challenging levels without frustration.

**Test Case:**
  **Given** I'm playing a level and tap the hint button,
  **When** the hint is provided,
  **Then** the hint should guide me by showing a sequence of light toggles,
  **And** the sequence should help me advance closer to solving the level.

**User Story 6: Resetting a Level**
  **As** a player,
  **I want** to be able to reset a level if I'm struggling or want to start over,
  **So that** I can improve my strategy and attempt the level again.

**Test Case:**
  **Given** I'm playing a level and want to reset it,
  **When** I tap the reset button,
  **Then** all light tiles on the grid should return to their initial states,
  **And** I should be able to make a fresh attempt at solving the level.

**User Story 7: Menu Options**
  **As** a player,
  **I want** access to various options from the in-game menu,
  **So that** I can manage my game progress and customize my experience.

**Test Case:**
  **Given** I'm playing the game,
  **When** I tap the menu button,
  **Then** a menu should appear with options such as changing the theme, changing the level difficulty, accessing settings, and quitting the game.

**User Story 8: Settings**
  **As** a player,
  **I want** to be able to adjust game settings to my preferences,
  **So that** I can enjoy the game in a way that suits me.

**Test Cases:**
  **Given** I access the settings from the menu,
  **When** I navigate to the settings screen,
  **Then** I should be able to adjust settings like theme effects and level difficulty,
  **And** the changes I make should be applied and maintained for subsequent sessions.

**User Story 9: Accessibility Features (Optional)**
  **As** a player with accessibility needs,
  **I want** the game to be inclusive and accessible,
  **So that** I can enjoy the game regardless of my individual requirements.

**Test Cases:**
  **Given** I play the game with accessibility features enabled,
  **When** I adjust settings like font sizes, no flickering effects or colorblind-friendly modes,
  **Then** the game interface should reflect these changes,
  **And** if I confirm, the game should play as I require, and without errors.

These user stories and corresponding test cases cover the basic functionality and interactions of the "Lights Out" browser game. Additional user stories could be developed for optional features like leaderboards, achievements and in-app purchases, based on the game's design and goals.
### Design Choices
#### Design Choices for the Light Out Browser Game

In developing the JavaScript Light Out game, several design choices were made to ensure a smooth and engaging user experience while also maintaining efficient and organized code. This section outlines the key design choices that were implemented throughout the development process.

**1. HTML Structure and Layout:**

The game's layout and structure were designed with simplicity and responsiveness in mind. I chose to use a grid layout to represent the game board, with each cell corresponding to a light. This grid layout adapts well to various screen sizes, ensuring a consistent experience across different devices.

**2. CSS Styling:**

A retro neon theme, with three visually pleasing designs was chosen to maintain focus on the gameplay, while giving the user a fun experience. The cell colors change to provide visual feedback when clicked. CSS animations were applied to create the neon effects and transitions between different game states.

**3. JavaScript Interaction:**

The core game logic was implemented using JavaScript. I utilised event delegation to efficiently handle cell clicks and their associated logic. When a cell is clicked, its class is toggled, representing whether the light is on or off. This approach minimizes the number of event listeners attached to individual cells.

**4. Game Logic:**

The game's logic revolves around determining when the player has successfully turned off all the lights. I used a simple data structure, such as a 2D array, to represent the initial state of the board and the effect of each cell's click on adjacent cells. 

**5. Win Condition:**

A win condition is checked after each cell click. The game scans the board to see if all lights have been turned off. If so, a congratulations message is displayed.

**6. Shuffle Button:**

To provide replayability, a shuffle button was included to allow players to start a new game. Additionally, this button was implemented to re-shuffle the initial state of the board, adding the randomness to each game.

**7. Accessibility:**

Efforts were made to ensure the game is accessible to all users. Proper semantic HTML elements were used, and appropriate ARIA roles were added where necessary. Keyboard navigation and focus styles were also implemented to enhance the user experience for those who rely on assistive technologies.

**Conclusion**

These design choices were carefully made to create an enjoyable and functional Light Out game. By prioritising responsive design, engaging visuals, efficient event handling, and accessible features, I aim to provide users with an immersive and entertaining gameplay experience on which ever device they choose to play on.
### Hex Colors and Fonts

**City Nights Colors**

`#0fa` - Neon Green 
`#0839f9` - Electric Blue 
`#0e134b` - Plasma Purple 
`#ae8625` and `#f7ef8a` - Gold FX 
`#fff` - White 

**Jungle Colors**

`#0fa` - Neon Green 
`#ff1493` - Neon Pink 
`#914db3` - Fluorite Purple 
`#ae8625` and `#f7ef8a` - Gold FX 
`#fff` - White 

**Mars Attacks Colors**

`#0fa` - Neon Green 
`#e35a17` - Sparking Orange 
`#1d4c76` - Plasma Blue 
`#ae8625` and `#f7ef8a` - Gold FX 
`#fff` - White 

**Font**

**Google Font:** `Tektur`
## Wireframes
### Desktop/Tablet Browser Game

![Desktop/Tablet Browser Game](/assets/wireframes/desktop-wireframe.png)
### Mobile Browser Game

![Mobile Browser Game](/assets/wireframes/mobile-wireframe.png)
## Attribution

Apart from what has been attributed below. All code within this project was programmed by *Nathan Drake* and utilises skills learnt from tutorials by *The Code Institute*, within their *Full Stack Web Development* course.

**Bootstrap's** basic framework was utilised and then tailored to the requirements set-out for this project, within the following areas:

1. Navbar.
2. Modal.
3. Buttons.
4. Grids and responsive behaviours.

[BootStrap](https://getbootstrap.com)

**Font Awesome** was used to provide three arrow icons above the *Press Shuffle to Start!* on the main game board pages. Also below the *How to Play* within the rules modal.

[Font Awesome](https://fontawesome.com)

**Google Fonts** was the main font used within this project - *Tektur*

[Google Fonts](https://fonts.google.com)

**CSS Tricks** was used to assist with the styling of the neon effects throughout this browser game.

[CSS Tricks](https://css-tricks.com/how-to-create-neon-text-with-css/)

**MDN Web Docs** was used to assist with the the JS code needed for the browser game to operate properly.

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Games/Introduction)

**ShutterStock** was utilised for all licensed background images and the favicon used on this game.

[ShutterStock](https://www.shutterstock.com)

**Alchetron** was used to source the *Rules* image.

[Alchetron](https://alchetron.com/cdn/lights-out-game)

**Git** was used for version control.

[GitHub](https://github.com)

**GitHub** was used to publish this browser game through *Pages*. 

[GitHub](https://github.com)

**VSC** Visual Studio Code software was used to develop the website `Integrated Development Environment *IDE*`.

[VS Code](https://code.visualstudio.com)

**Lucid** was used to create the wireframes.

[LucidChart](https://www.lucidchart.com)
## Contributing and Maintenance

I welcome contributions from anyone interested in improving this project. Feel free to open issues and submit pull requests to suggest changes, report bugs, or add new features.

Maintenance will be completed regularly, to update code and external links where necessary.
