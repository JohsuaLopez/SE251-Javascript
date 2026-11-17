# Pong

A two-player Pong game built with JavaScript and the HTML Canvas API, with a live settings panel so each player can customize the game while it runs.

**[Play it in your browser](https://johsualopez.github.io/SE251-Javascript/Week%204/)**

Course project for **SE 251 (JavaScript)** at New England Institute of Technology. It's built on a Canvas game engine we started in class.

## Features

- **Two-player gameplay** at 60 fps, with paddle movement that uses friction, wall bounces, scoring, and goal detection
- **Angle control:** the ball bounces up or down depending on where it hits the paddle, and holding the "straight" key sends it back flat
- **Settings panel** (click **Options** to open it):
  - Color picker for each player's paddle, showing the hex code
  - Remappable Up / Down / Straight keys for each player. The game pauses while you edit a key; press **Esc** to resume
  - Ball-speed slider (2–12) that takes effect mid-game

## Controls

| Action | Player 1 | Player 2 |
|---|---|---|
| Move up | `W` | `↑` |
| Move down | `S` | `↓` |
| Hit straight (hold) | `D` | `←` |
| Resume after editing a setting | `Esc` | `Esc` |

## How it's built

| File | What it does |
|---|---|
| `js/Box.js` | `Box` class for every object on the canvas (paddles, ball, goals): position, velocity, drawing, collision |
| `js/User.js` | `User` class for each player's settings: score, colors, key bindings, paddle force and ball power |
| `js/keyboard.js` | Tracks which keys are held down |
| `js/pong.js` | Game loop (60 fps), `game` / `pause` states, physics, and scoring |
| `js/options.js` | Settings panel: color inputs, key remapping, ball-speed slider |

## Run it locally

No build step. Clone the repo and open `Week 4/index.html` in a browser.
