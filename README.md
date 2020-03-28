# Self-check (app frontend)

This is the frontend for [self-check.covid19dz.com](https://self-check.covid19dz.com), an app providing an online test for helping people understand their symptoms and the options available for conduct in case of suspicion of exposition to the COVID-19 Coronavirus.

**Note: This project is for informational purposes only and is not intended to replace formal medical consultation with a doctor or at a health establishment.**

**Note: A compatible API URL must be provided in `src/app/constants.js`.**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Development Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run i18n-scan`

Scans the code for new strings to include in the translation files at `src/app/i18n/{lang}/resource.json`.

Don't worry, this won't override any already-translated entries.

## Production Scripts

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Deploys the app into **Github Pages** by running a build, then pushing to the `origin/gh-pages` branch.

**Note:** ensure the Github Pages section of your project's settings is configured to serve files from the `gh-pages` branch. Also ensure the `"homepage"` attribute in your `package.json` file and the host in `public/CNAME` are set correctly.

For other deployment options, see https://facebook.github.io/create-react-app/docs/deployment

## Contributing

Your contributions are always welcome.
