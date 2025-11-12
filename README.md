# 3 Step Sports Website Testing Project 🧪

This project focuses on both manual and automated testing of the **3 Step Sports** main website using **Jira** for manual test management and **Cypress** for automated test execution.

---

## 📋 Overview

The goal of this project is to verify that core user interactions — such as navigation, buttons, links, and videos — on the 3 Step Sports website work as expected.  

- **Manual Testing Tool:** [Jira](https://ajfergestad.atlassian.net/jira/software/projects/SCRUM/boards/1)  
- **Automation Framework:** [Cypress](https://www.cypress.io/)  
- **Website Under Test:** [3 Step Sports](https://threestep.com)

---

## 🧩 Manual Testing

Ten manual test cases were first written and tracked in **Jira**, covering user journeys across navigation, social links, and page interactions.

👉 View them here:  
[**Jira Test Board – SCRUM**](https://ajfergestad.atlassian.net/jira/software/projects/SCRUM/boards/1)

---

## ⚙️ Automation Testing with Cypress

All ten manual test cases were automated using **Cypress**. Each test validates a key part of the website’s user experience.

### ✅ Automated Test Coverage

1. **Navigation Bar (Sports → Basketball)** – Verifies navigation works via dropdown.  
2. **Instagram Follow Button** – Confirms it opens in a new tab.  
3. **Footer “News” Link** – Validates navigation to “Latest News.”  
4. **PlayerFirstTech Button (PF Web & Pay)** – Checks redirection and visible text.  
5. **File a Claim (Vertical Insure)** – Tests the process and external redirect to `vicoverage.com`.  
6. **Leadership Section (CEO Popup)** – Ensures popup displays correct bio.  
7. **Carousel Button (Our Partners)** – Tests multiple carousel arrow clicks.  
8. **Premier Basketball Report Link** – Verifies external site redirection from “Data & Rankings.”  
9. **Scroll to Top Shortcut** – Confirms the button scrolls the user to the top.  
10. **Video Playback (Clubs and Events Tab)** – Ensures the embedded video plays correctly.

---

## 🧠 Technologies Used

- **Cypress** – End-to-end testing framework  
- **JavaScript / Node.js** – Test scripting  
- **Jira** – Manual test management  
- **Git / GitHub** – Version control  
- **3Step.com** – Target web application  

---

## ▶️ How to Run the Automation Tests

Follow these steps to clone the project and execute the Cypress test suite locally.

### 1. Copy and Paste
Copy and paste the code from 3stepsports.cy.js.

### 2. Install Node.js
Use the command "npm install -g npx".
Then, "npm install".

### 3. Running Cypress
To run Cypress, enter the command "npx cypress open".
When the GUI opens up, select "E2E Testing".
Then click "Start E2E Testing in Chrome".
Then click on "3stepsports.cy.js".

* I used Cypress version 12.4.0

