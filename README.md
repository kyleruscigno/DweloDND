# Dwelo Drag-And-Drop Assignment
This project allows users to drag and drop devices between different status groups to visually assign them and update their underlying data. The design is responsive and adjusts the layout on mobile. This project relies on certain libraries and frameworks to add functionality.
React and Create-React-App are used to bootstrap the application.
ReactStrap is used for quick styling.
DND-Kit is used to assist with Drag-And-Drop functionality (https://dndkit.com/).

=== DIRECTORY STRUCTURE ===

- /src is the root of the application with index.js & App.js the entry point
- /components defines different react components used to build the UI
- /logic defines helper functions and data transforms used to manipulate the incoming dummy data for the project, and transforn underlying data when certain actions are performed (such as moving a device to a new status group)
- /models defines data structures for the project (in this case the available status groups)
- /resources is a catch all for different content resources used in the project (for instance all strings are grouped here so they can be localized)
- /styles defines the css styles, and are named to associate them with their corresponding ui component

=== RUNNING TESTS AND SERVER ===

Certain Tests are provided in files with the extension test.js
to run the given tests please use the command 'npm test'

To start CRA's development server please use the command 'npm start'
and navigate to http://localhost:3000/ if it does not open automatically

=== KNOWN BUGS ===

Dragged elements will float towards the bottom of the list when dropped, even if it is currently offscreen due to being in a scrollable container


=== CREATE REACT APP's DOCUMENTATION BELOW ===

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
