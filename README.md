# BarterHeart Prototype

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Prototype-green)]()
[![Built with](https://img.shields.io/badge/Built_with-HTML,_CSS,_JS-blue)]()

A dynamic front-end prototype demonstrating the power and flexibility of an intent-centric architecture, inspired by the principles of [Anoma](https://anoma.net/).

</div>

---


## 🚀 Core Philosophy

In a traditional blockchain application, users must specify the exact, step-by-step instructions to achieve a goal (an *imperative* approach). This dApp explores an *intent-centric* model, where users simply declare their end goal (a *declarative* approach), and the system finds a way to satisfy it.

For example, instead of crafting a complex smart contract call to trade an NFT, a user simply states: *"I want to trade my Shrimper #123 for a CoolCat #77."*

This prototype simulates how such a system would work on the front-end, using the browser's local storage as a shared "mempool" of intents.

## ✨ Features

This dApp is built as two main pages: a dashboard for viewing the state of the ecosystem and an actions page for submitting new intents.

### 📝 Core Intents

- **🔄 NFT Barter Swaps**: Declare an intent to trade one specific NFT for another.
- **🤝 Anonymous Donations**: Contribute tokens to broad community causes.
- **🗳️ Community Voting**: Express non-financial support for various community proposals.

### 📊 Interactive Dashboard (`index.html`)

- **Live Intent Feed**: A central feed showing all swaps, donations, and votes as they are submitted.
- **Automatic Matching**: When two opposing swap intents are submitted (A for B, and B for A), they are automatically resolved into a single "Match Successful" intent.
- **Milestone Progress Bars**: Tracks progress towards specific, actionable goals (e.g., "Fund Research Paper"). Donations to a cause automatically fund the next available milestone.
- **Donation Leaderboard**: A leaderboard tracking the top 5 anonymous donors, complete with medal emojis (🥇🥈🥉).
- **Live Updates**: The dashboard updates in real-time across tabs (`storage` event) and reliably refreshes when navigating with the back button (`pageshow` event).

### 🎭 Anonymous Identity & Gamification

- **Anonymous Profile**: Each user is assigned a random, persistent alias (e.g., "Anonymous Shrimp") stored locally.
- **User Levels & Titles**: Your alias earns titles based on your activity (donations, swaps, votes). Progress from an "Anonymous Tadpole" to an "Anonymous Leviathan."
- **Cause Badges**: Earn badges (e.g., 🌱 Environment Guardian) for contributing to different causes.
- **Personal Stats**: Your dashboard tracks your total tokens donated, successful swaps, and votes cast.

### 🎬 Actions & User Experience (`actions.html`)

- **Real-time Swap Preview**: Instantly see if a matching counter-offer already exists as you type.
- **Animated Submissions**: Buttons provide instant feedback with loading spinners and success states.
- **Toast Notifications**: All successful submissions are confirmed with a sleek, non-intrusive notification.

## 🛠️ Tech Stack

This prototype is built entirely with client-side technologies to demonstrate that complex state management can be simulated without a backend.

- **HTML5**
- **CSS3** (Custom Properties, Flexbox, Grid)
- **Vanilla JavaScript (ES6+)**
- **Browser `localStorage`**: Used as the single source of truth for all application state.
- **[particles.js](https://vincentgarreau.com/particles.js/)**: For the subtle, animated "stardust" background.

## 📁 File Structure
├── 📄 actions.html       # The page for submitting all intents.
├── 📄 index.html         # The main dashboard for viewing all data.
├── 📜 app.js              # Configuration for the particles.js background.
├── 🎨 styles.css          # All styling for the application.
├── 🖼️ anoma_logo.jpg       # The application logo.
├── 🦐 shrimp.png          # Asset for the particle animation.
├── 🐈 cat.png             # Asset for the particle animation.
└── 📖 README.md          # This file.

## ⚙️ How to Run Locally

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/crystion7/BarterHeart.git](https://github.com/crystion7/BarterHeart.git)
    ```
2.  **Navigate to the directory:**
    ```sh
    cd your-repo-name
    ```
3.  **Run with a local server:**
    Because the app uses JavaScript to manage state, it's best to run it with a simple local server. If you have Node.js installed, you can use the `serve` package:
    ```sh
    npx serve
    ```
    Then, open your browser and go to the URL provided (e.g., `http://localhost:3000`).

    Alternatively, you can simply open `index.html` directly in your web browser.

## 🤝 Contributing

This is a prototype project, but contributions and ideas are welcome!

1.  **Fork** the repository.
2.  Create a new **branch** (`git checkout -b feature/your-feature-name`).
3.  Make your changes and **commit** them (`git commit -m 'Add some amazing feature'`).
4.  **Push** to the branch (`git push origin feature/your-feature-name`).
5.  Open a **Pull Request**.

For bugs or feature suggestions, please open an issue on the repository's "Issues" tab.

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
