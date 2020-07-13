# Fansbook

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Fansbook** is a attempted replica of Facebook with basic functionalities_

<br>

## MVP

_**Fansbooke** will have_

- Posts CRUD
- User Sign Up and Sign In functionalities
- User Auth

<br>

### Goals

- Users will be able to CRUD posts
- User will be able to like and comment on friends' posts

<br>

### Libraries and Dependencies

|     Library     | Description                                         |
| :-------------: | :-------------------------------------------------- |
|      React      | _Will use React for the front end_                  |
|  React Router   | _Route Users to different pages_                    |
| React Bootstrap | _Will use Bootstrap to speed up front end building_ |
|      Rails      | _Will use rails for the backend_                    |
|      Rails      | _Will use rails for the backend_                    |
|     Bcrypt      | _User Encryption_                                   |
|       JWT       | _User Auth_                                         |

<br>

### Client (Front End)

#### Wireframes

#### Overview

![](assets/Fanspage.png)

#### Landing Page

<img src="assets/landing.png" width="500"/>

#### Log In Page

<img src="assets/login" width="500"/>

#### Create Account Page

<img src="assets/account-page.png" width="500"/>

#### Homepage

<img src="assets/homepage.png" width="500"/>

#### Search Page

<img src="assets/search-page.png" width="500"/>

#### Create Post Page

<img src="assets/create-post.png" width="500"/>

#### Homepage 2

<img src="assets/homepage2.png" width="500"/>

#### Profile Page

<img src="assets/profile-page.png" width="500"/>

#### Component Hierarchy

```structure

src
|__ images
|__ components/
      |__ chat-list.component.jsx
      |__ settings.component.jsx
      |__ edit-profile.component.jsx
      |__ add-partcipants.component.jsx
      |__ chat-screen.component
|__ services/
    |__ apiHelper.js
    |__ user.js
    |__ auth.js

```

#### Component Breakdown

|    Component     |    Type    | state | props | Description                                    |
| :--------------: | :--------: | :---: | :---: | :--------------------------------------------- |
|    chat-list     | functional |   y   |   y   | _list of chats_                                |
|     settings     | functional |   y   |   y   | _User can update user settings_                |
|   edit-profile   | functional |   y   |   y   | _User can edit user profile_                   |
| add-participants | functional |   y   |   y   | _User can add friends_                         |
|   chat-screen    | functional |   y   |   y   | _User can chat here and see past chat history_ |

#### Time Estimates

| Task      | Priority | Estimated Time | Time Invested | Actual Time |
| --------- | :------: | :------------: | :-----------: | :---------: |
| CSS       |    H     |     20 hrs     |      TBH      |     TBH     |
| Front End |    VH    |     30 hrs     |      TBH      |     TBH     |
| Back End  |    H     |     15 hrs     |      TBH      |     TBD     |
| TOTAL     |          |     6 hrs      |      TBH      |     TBD     |

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

<br>

---

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
