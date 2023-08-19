# Lights Out

[GitHub](https://orgnatedrake.github.io/milestone-project-2/)

This is the README file for a three-page website, for a Lights Out game. The website consists of three main pages**themes**: City Lights theme, Mars Attacks theme, and Jungle theme

![I Am Responsive](docs/iamresponsive.png)

[Am I Responsive](https://ui.dev/amiresponsive?url=https://orgnatedrake.github.io/milestone-project-2/)
## Table of Contents

- [Introduction](#introduction)
  - [Programming Languages](#programming-languages)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Deployment](#deployment)
- [User Experience UX](#user-experience-ux)
  - [User Stories](#user-stories)
  - [Design Choices](#design-choices)
  - [HEX Colors and Fonts](#hex-colors-and-fonts)
- [Wireframes](#wireframes)
  - [Large Screen Homepage](#large-screen-homepage)
  - [Large Screen Gallery](#large-screen-gallery)
  - [Large Screen Contact Me](#large-screen-contact-me)
  - [Mobile Homepage](#mobile-homepage)
  - [Mobile Gallery](#mobile-gallery)
  - [Mobile Contact Me](#mobile-contact-me)
  - [Modal](#modal)
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