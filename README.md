## Code Assessment for Front-end Engineer - Vikas Ranjan - Notes

Dear team,

Thanks a lot for giving me this opportunity to take up the challenge and be a part of this process.
Please find some information below to help you understand what are the features that I have developed, how have I designed the project and why have I made certain choices.

For easy walkthrough, I will divide the points in these major categories.

-   Functional specifications
-   Non Functional specifications
-   Code Structure
-   Tech choices
-   Unit tests
-   Further Improvements which could be done later

Apart from developing the features, I have also paid attention to :-

-   Best practices and clean code (used ESLint, Prettier)
-   Code readability and maintainability
-   Beautiful UI/UX and styling
-   Mobile responsive
-   Performance improvements
-   Error handling
-   Security
-   Accessibility

# Application Demo

The app is already deployed at the link: https://spontaneous-torrone-3e1568.netlify.app/
Requesting the team to go through and play around with it.

# How to run the code locally?

-   Please take a clone of the main branch of this repo on your local system
-   Run npm install in your terminal
-   Run npm start to start the server
-   The app should start running on localhost:3000 by default

# Functional details (that I have implemented)

-   [x] Use the API provided by GitHub Gist API to create a basic
        website as a single-page app with React.
-   [x] Create a simple single-page application.
-   [x] Search: When a user enters a username, it should be able to get a full list of public Gists by that user.
-   [x] Filetype: Convert the filetypes of the files in the gist into a tag/badge
-   [x] Fork: Username/Avatar of the last 3 users who forked it with avatar linking to the fork.

# Non Functional specifications (that I have implemented)

-   Responsive layout tested on different laptop and mobile screens
-   Tested on different browsers(Chrome, Safari, Firefox, Edge) and OS (Mac, Windows) to ensure it is working fine
-   Performance : Tried to improve performance of the application from multiple aspects to make it more scalable in future
-   Use of React Hooks: Used React hooks like useEffect, useEffect, useCallback, useMemo and custom hooks
-   Clean code: Tried to write a clean and indented code (which follows Prettier code formatting)
-   Used URL based routing to preserve state of the username searched and gistId

# Code Structure

Inside the src folder, created two separate folders for :-

-   pages:
    -   For all the main pages/features of the App
    -   I have created subfolders for all features, e.g. "search page" and "gist detail" page
-   common:

    -   For all the common code that can be shared across pages/features.

-   I have created a folder for every component which usually has its main component(index.jsx) and its custom css file (if required)

-   api : contains fetchGists.js which makes the actual calls in the application
-   assets: icons and images used in the application
-   common >> components: contains all the common components that the application is using, e.g. footer, header, loader etc.
-   components: all common sub-components used in the application
-   hooks: custom hooks for detecting the device width

# Tech choices

-   Used ReactJS to complete the problem statement. Since it is the primary tech stack at Eventmobi. Also, the component based architecture in React is amazing to create a large scale single page application.
-   Used functional components
-   Used react-router for routing for navigating through different pages and to preserve the state for username search, gist details.
-   Used axios for making any API calls. It gives additional advantages for cancelling and intecepting API requests which could be benefeicial later.
-   Used Tailwind for styling with react: Tailwind is an amazing CSS library which is easy to customize, highly adapting and results a tiny CSS build file which only consists of the CSS that we are actually using rather than the complete styles.
-   Used moment js for date formatting

# Performance improvements

-   Used useCallback, useMemo wherever applicable to wrap functions that are being passed as props (callbacks) to child components to avoid creation of a ne instance on every re-render
-   Wrapped components under React.memo wherever applicable to avoid unnecessary re-renders
-   Used React hooks like useState and useEffect wherever applicable for all state updates and re renders
-   Used Tailwind css which has a tiny css build file.

# Styling

-   All style files have been created inside the folder of the specific component to keep development and debugging easier and quicker
-   Used TailwindCSS for most styling in the application to keep the UI consistent
-   Used native css as of now for some custom styling since the project was small. For a large-scale project, would prefer using "Styled components" in react since they support dynamic styling based on props, clean styling for each component makes code readable and maintainable.

# Error handling

-   Wrapped all network calls within Try/catch blocks
-   Added a Error Boundary Component to make sure that the App never breaks in case (shows blank page) of errors/bugs and users have a good user experience

# Security

-   Currently no user input in being displayed on screen. Going forward, if we have to would sanitise all user input to avoid XSS attacks

# Accessibility

-   All the forms are accessible through keyboard
-   Use of alt keywords alongwith images

# Unit tests

Due to time constraints, I could not write unit test cases. However, below are some cases which I would test in the application

-   Mock the search API to get empty gists list and check that gists list is not rendered
-   Mock the search API to get a valid list of gists and check that the data is rendered properly as expected in the DOM
-   Check that the route of the application is changing post search
-   Check that the route of the application is default "/" when search is empty/cancelled
-   Check that cancelling search works correctly
-   Mock the fetch API to get gists data based on id Match the basic details of the gist with the mock data.
-   Mock the fetch API to get gists data based on id for invalid gistId and check that proper error message is shown
-   Mock the fetch API to get gists data which has no files and see that the table is not rendered
-   Mock the fetch API to get gists data which has no forks and see that the "None" is rendered
-   Check that Go Back is working correctly
-   Check that the routing is working correctly

# Further Improvements/Changes which could be done later

-   Separate styling for tablet devices.
-   Add Unit test cases
-   Improve device responsiveness of the tables for gists list and files list
-   Accessibility could be further improved - background and foreground colors do not have a sufficient contrast ratio, use of aria-attributes
-   Improve security using authentication/authorization

## Final words

I had an amazing experience working on this assessment. The steps were well-documented that made them pretty much self-explanatory. Even though the problem statement looked simple initially, the beauty of it was that it was very open-ended.
This gives developers the opportunity to show their own creativity and skills and create and amazing product.

Also, I sincerely appreciate the team's patience throughout the process.
Looking forward to the feedback.
