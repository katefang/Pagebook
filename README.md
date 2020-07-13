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
- User will be able to like and comment on everyone's posts

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

![](assets/Fansbook.png)

#### Landing Page

<img src="assets/landing.png" width="500"/>

#### Log In Page

<img src="assets/login.png" width="500"/>

#### Create Account Page

<img src="assets/create-account.png" width="500"/>

#### Homepage

<img src="assets/homepage.png" width="500"/>

#### Search Page

<img src="assets/search.png" width="500"/>

#### Create Post Page

<img src="assets/create-post.png" width="500"/>

#### Homepage 2

<img src="assets/homepage2.png" width="500"/>

#### Profile Page

<img src="assets/profile.png" width="500"/>

#### Component Hierarchy

```structure

src
|__ images
|__ components/
      |__ landing-page.jsx
      |__ login-page.jsx
      |__ create-account-page.jsx
      |__ homepage.jsx
      |__ profile-page.jsx
      |__ header.jsx
|__ services/
    |__ apiHelper.js
    |__ user.js
    |__ auth.js

```

#### Component Breakdown

|   Component    |    Type    | state | props | Description                             |
| :------------: | :--------: | :---: | :---: | :-------------------------------------- |
|     header     | functional |   y   |   y   | _header for some pages_                 |
|  landing-page  | functional |   y   |   y   | _landing page aka getting started page_ |
|   login-page   | functional |   y   |   y   | _user login page_                       |
| create-account | functional |   y   |   y   | _new user create account page_          |
|    homepage    | functional |   y   |   y   | _homepage with friend's posts_          |

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

![](assets/ERD.png)

<br>

---

## Post-MVP

- have friends

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
