# Lights Out 

[GitHub](https://orgnatedrake.github.io/milestone-project-2/)

This is the TEST file for a three-page website, with a Lights Out browser game within. **Themes: City Lights, Mars Attacks, and Jungle.**
## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Deployment](#deployment)
- [Testing](#testing)
  - [Automated Testing](#automated-testing)
  - [Manual Testing](#manual-testing)
  - [Related Tests Completed](#related-tests-completed)
    - [Manual Exploratory Tests](#manual-exploratory-tests)
    - [Functionality Testing](#functionality-testing)
    - [Usability Testing](#usability-testing)
    - [Responsiveness Testing](#responsiveness-testing)
    - [Edge Cases](#edge-cases)
  - [W3C](#w3c)
  - [Accessibility and Performance](#accessibility-and-performance)
    - [PageSpeed Insight](#pageSpeed-insight)
    - [Wave](#wave)
    - [JSLint](#jslint)
  - [User Stories Tested](#user-stories-tested)
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
- Manual exploratory tests were completed to assess functionality, usability and responsiveness of this web application.
### Automated Testing:

**Principles:**

1. **Repeatability:** Automated tests can be executed repeatedly without any variation in their steps and expected outcomes.

2. **Consistency:** Automated tests perform the same steps and checks each time, eliminating human errors and ensuring consistent results.

3. **Efficiency:** Automated tests can run quickly and efficiently, covering a large number of test cases in a short time.

4. **Regression Testing:** Automated tests are particularly useful for regression testing, where previously tested functionality is retested to ensure that new changes have not introduced defects.

5. **Data-Driven Testing:** Automation allows for data-driven testing, where tests are executed with different sets of data to verify various scenarios.

6. **Continuous Integration/Continuous Deployment (CI/CD):** Automated tests can be integrated into the CI/CD pipeline, allowing for immediate feedback on code changes and ensuring that only high-quality code is deployed.

**When to Deploy Automated Testing:**

- **Regression Testing:** Automated tests are ideal for regularly checking existing functionality after code changes.
- **Highly Repetitive Tests:** Tasks like data validation, login/logout procedures, and API testing can be automated for efficiency.
- **Load and Performance Testing:** Automated tools can simulate a large number of users to test system performance under heavy loads.
- **Cross-Browser and Cross-Platform Testing:** Automated frameworks can be used to test web applications on different browsers and platforms.
### Manual Testing:

**Principles:**

1. **Exploratory Testing:** Manual testing is excellent for exploratory testing, where testers actively explore the application to discover unforeseen issues and usability problems.

2. **User Experience (UX) Testing:** Manual testers can assess the application's user-friendliness, usability, and overall user experience, providing valuable insights.

3. **Ad Hoc Testing:** In situations where test cases aren't well-defined or documented, manual testers can perform ad hoc testing to identify issues.

4. **Non-Functional Testing:** Tests related to subjective criteria like aesthetics, layout, and overall look and feel are often better suited for manual testing.

**When to Deploy Manual Testing:**

- **Usability Testing:** To evaluate the user interface and overall user experience.
- **Exploratory Testing:** When new features are introduced or when test cases are not yet well-defined.
- **Complex Test Scenarios:** For intricate and multi-step test cases where human intuition is required.
- **Non-Functional Testing:** Assessing subjective aspects like aesthetics, accessibility, and human factors.

In practice, a combination of both automated and manual testing is often employed to ensure comprehensive test coverage. Automated testing is efficient for repetitive and regression testing, while manual testing is valuable for exploratory and usability aspects. The choice between them depends on project requirements, budget constraints, and the specific nature of the testing needed for a particular software application.
### Related Tests Completed
#### Manual Exploratory Tests

To ensure the functionality, usability, and responsiveness of my Lights Out browser game, a series of manual exploratory tests were conducted. These tests allowed me to thoroughly assess the game's performance and user experience across various scenarios and devices.
#### Functionality Testing

1. **Game Initialisation:** Checked if the game initialises correctly and displays the grid of lights.

2. **Clicking Lights:** Tested if clicking on individual lights toggles their state correctly.

3. **Winning Condition:** Verified that the game detects and congratulates the player when all lights are turned off.

4. **Reset Functionality:** Ensured that the shuffle button works as expected, resetting the game to its initial state.
#### Usability Testing

1. **User Interface (UI):** Evaluated the overall design and layout of the game for clarity and ease of use.

2. **Instructions:** Confirmed that instructions on how to play the game are clear and understandable.

3. **Feedback:** Assessed whether the game provides feedback to the user for their actions, such as successful moves, hints and game completion.

4. **Accessibility:** Checked for accessibility features, ensuring that the game is usable by people with disabilities.
#### Responsiveness Testing

1. **Browser Compatibility:** Tested the game on various browsers (e.g., Chrome, Firefox, Safari) to ensure it functions consistently.

2. **Mobile Devices:** Checked how the game behaves on different mobile devices and screen sizes.

3. **Tablets:** Ensured that the game is responsive on tablet devices, maintaining usability and performance.

4. **Scaling:** Verified that the game scales appropriately when the browser window is resized.
#### Edge Cases

1. **Extreme Inputs:** Attempted to break the game by performing extreme actions, such as rapidly clicking lights or resizing the window during gameplay.

2. **Network Interruptions:** Simulated network interruptions to assess how the game handles potential connectivity issues.

These manual exploratory tests were essential in identifying and addressing potential issues, ensuring that my Lights Out browser game delivers a seamless and enjoyable gaming experience to users of all kinds. If you encounter any issues or have feedback, please don't hesitate to report them to me.
### W3C

Within W3C's validators. I have fully tested the one **CSS** stylesheet via the **Direct Input** method. I have also fully tested all three **HTML** pages via the **URI Input** method. No fails were found and all warnings were fully resolved and have now **passed all checks**.

![W3C CSS Validation](/assets/test-images/lights-out-css-pass.jpeg)

[CSS Validator](https://jigsaw.w3.org/css-validator/)

![W3C HTML Validation](/assets/test-images/lights-out-html-pass.jpeg)

[HTML Validator](https://validator.w3.org)
### Accessibility and Performance

![I Am Responsive](/assets/test-images/responsive-demo.jpeg)
#### PageSpeed Insight

![PageSpeed Insight](/assets/test-images/pagespeed-insight.jpeg)

[PageSpeed](https://pagespeed.web.dev)

After testing my website and the Lights Out browser game within, I have found that performance was slower than expected.

The slower-than-expected performance during website loading can be attributed to the resource-intensive nature of the JavaScript code responsible for running the browser game. As the game utilises complex logic and graphics, it requires a substantial amount of processing power and memory allocation, thereby affecting the overall loading speed of the website.

*More information about this issue is detailed within the **Bugs** section below*
#### Wave

I have also tested this site with **Wave** for accessibility and performance. Major contrast issues were corrected and the 5 remaining contrast issues were thought not to be of concern.

![Wave Test Results](/assets/test-images/wave-test.jpeg)

[Wave](https://wave.webaim.org)
#### JSLint

I have passed all Java Script code through **JSLint** and only 2 warnings were reported, with no fundamental errors reported. The warnings are not of concern, as the code correctly runs without issue.

![JSLint Test Results](/assets/test-images/jslint-check.jpeg)

[JSLint](https://www.jslint.com)
### User Stories Tested

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

![Test 2 Before](/assets/test-images/test2-before.jpeg)
![Test 2 After](/assets/test-images/test2-after.jpeg)

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

![Win Message](/assets/test-images/win-message.jpeg)

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

![Test 5 Button](/assets/test-images/test5-btn.jpeg)
![Test 5 Solution](/assets/test-images/test5-solution.jpeg)

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

![Menu](/assets/test-images/menu-mobile-view.jpeg)

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

These user stories and corresponding test cases cover the basic functionality and interactions of the "Lights Out" browser game. Additional user stories could be developed for optional features like leader-boards, achievements and in-app purchases, based on the game's design and goals.
## Bugs

**Overall Performance**

One effective strategy to address the slower than expected performance, and which will be implemented in future updates, is code splitting and creating smaller functions, rather than using one large function.

Code splitting involves breaking down the JavaScript codebase into smaller, more manageable chunks. By doing so, I can prioritise the loading of essential components required for the initial page render, while deferring the loading of non-essential components, such as the browser game code, until they are actually needed. This approach optimises the initial loading speed of the website, providing users with a faster and smoother experience upon arrival.

Incorporating code splitting not only enhances the website's performance but also improves user engagement by reducing the perceived load time. Through this proactive measure, I aim to strike a balance between offering feature-rich content like the browser game and ensuring an optimal user experience, particularly for visitors accessing the website on various devices and network conditions.
## Contributing and Maintenance

I welcome contributions from anyone interested in improving this project. Feel free to open issues and submit pull requests to suggest changes, report bugs, or add new features.

Maintenance will be completed regularly, to update code and external links where necessary.