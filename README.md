# Date Idea Generator

[My Notes](notes.md)

An application that allows the user to generate date ideas.

### Elevator pitch

A date generator app. This app will allow you to input the mood: Is it a first date? Sports or movie? Video games or board games? Hike or side quest? Then from those answers the app will generate the perfect date idea. You can have people submit reviews for their generated date about how well it may or may not have gone. The UI will be simple, presenting one question at a time and having clickable options. The ability to return to a previous question will be provided. You can save generated date ideas for later reference.

### Design

<img width="4080" height="3072" alt="Design (1)" src="https://github.com/user-attachments/assets/6d428c16-498b-4761-851f-f8fff7a949d1" />


In the crude drawings above, the general layout of the app is presented with a title above, interactable login, and interactable buttons for the prompts and saving the generated idea.

### Key features

- Interactable questions that allow for ultimate date idea generation
- Ability to save generated ideas
- Ability to review used ideas and see reviews from other users

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Three HTML pages. One for login, second for input and idea generation, and third for saved ideas and user ranking.
- **CSS** - Easy to navigate with buttons that push in on animation, and transition animations to give the app life.
- **React** - Provides login, option to generate idea or view saved ideas, generation leads to prompts for the idea, option to save idea, in saved ideas can review ideas, ability to see other users' reviews
- **Service** - Backend service with endpoints for:
Answering prompts for idea generation.
Retrieve other users' reviews on applied ideas.
Send out user's own reviews.
Register, login, and logout users. Ideas are saved to accounts.
- **DB/Login** - Store users, friends, saved ideas, and idea reviews.
- **WebSocket** - As users submit reviews, they are sent out.

## 🚀 Specification Deliverable

> [!NOTE]
> Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] I completed the prerequisites for this deliverable (Git commit requirement)
- [X] Proper use of Markdown
- [X] A concise and compelling elevator pitch
- [X] Description of key features
- [X] Description of how you will use each technology including your 3rd party API and use of WebSocket
- [X] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Rented EC2 server** - I completed this.
- [X] **Leased domain name** - I leased the name dategenerator.click.
- [X] **Server accessible** from my domain: [https://dategenerator.click](https://dategenerator.click)

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [X] **HTML pages** - I did not complete this part of the deliverable.
- [X] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [X] **Links** - I did not complete this part of the deliverable.
- [X] **Text** - I did not complete this part of the deliverable.
- [X] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [X] **Images** - I did not complete this part of the deliverable.
- [X] **Login placeholder** - I did not complete this part of the deliverable.
- [X] **DB data placeholder** - I did not complete this part of the deliverable.
- [X] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [X] **Visually appealing colors and layout. No overflowing elements.** - I did not complete this part of the deliverable.
- [X] **Use of a CSS framework** - I did not complete this part of the deliverable.
- [X] **All visual elements styled using CSS** - I did not complete this part of the deliverable.
- [X] **Responsive to window resizing using flexbox and/or grid display** - I did not complete this part of the deliverable.
- [X] **Use of a imported font** - I did not complete this part of the deliverable.
- [X] **Use of different types of selectors including element, class, ID, and pseudo selectors** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [X] **Bundled using Vite** - I did not complete this part of the deliverable.
- [X] **Components** - I did not complete this part of the deliverable.
- [X] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [X] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [X] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [X] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [X] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [X] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [X] **Backend service endpoints** - I did not complete this part of the deliverable.
- [X] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [X] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.
- [X] **Uses BCrypt to hash passwords** - I did not complete this part of the deliverable.

## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [X] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [X] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [X] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [X] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [X] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [X] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [X] **Application is fully functional** - I did not complete this part of the deliverable.
