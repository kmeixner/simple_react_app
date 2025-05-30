# Simple React App

This is a simple react app that I created for learning and reference purposes.

It has many examples in index.js based on the React tutorial
at https://www.w3schools.com/react/default.asp .
Some examples have had names of components, etc., altered slightly.
The examples in index.js can be commented/uncommented to see them work.

Note: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Structure

- README.md : this README file
- node_modules/ : (do not commit) generated Node modules (eg: npm install upper-case)
- package-lock.json : (should be committed) contains metadata about project and its dependencies
- package.json : (should be committed) ensures exact versions of all dependencies installed, for reproducible builds.
- public/ : holds static assets like the index.html file and the favicon
- public/index.html : holds the <div> with id=root where the React App is rendered
- src/ : source code my React components and application logic
- src/App.js : for component logic
- src/index.js : for the entry point and rendering setup

Notes:
- App.js : main component of your React application, containing the structure and logic for your app's user interface. It defines the layout, components, and functionality of the app.
- index.js : acts as the entry point for your React application. It sets up the rendering process and attaches the root component (usually App.js) to the HTML document. It initializes the React DOM and provides the initial rendering of your app.

While App.js focuses on the component logic, index.js is responsible for rendering the root component and setting up the application's initial state and rendering process.

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
