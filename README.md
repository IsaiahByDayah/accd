## What is `cra-typescript`? 🤷🏽‍♂️
`cra-typescript` is a barebones [Create React App](https://github.com/facebook/create-react-app) project, setup to use [TypeScript](https://www.typescriptlang.org), and comes with some pre-configurations I general find useful:

### Linting: ESLint
With the recent sunsetting of [TSLint](https://palantir.github.io/tslint/), [ESLint](https://eslint.org/) is becoming the recommended way of [linting with TypeScript](https://github.com/Microsoft/TypeScript/issues/29288#developer-productivity-tools-and-integration).

### Formatting: Prettier
To help files inline with the linting rules provided by ESLint, we use [prettier](https://prettier.io/) (along with the [VS Code plugin](https://github.com/prettier/prettier-vscode)) to auto format our files.

### UI: Material-UI
I find [Material-UI](https://material-ui.com) to be an _incredibly_ useful library and so I include it in this package. Some people prefer the [Ant Design](https://ant.design/docs/react/introduce) library though (as well as others) so feel to swap this out with whatever you prefer

### Icons: Material-UI/icons
[Material-UI](https://material-ui.com) also supplies some nice [icons](https://material-ui.com/components/material-icons/) that work well with its components. If you find yourself wishing you had more, I suggest adding [Material Design Icons](https://github.com/TeamWertarbyte/mdi-material-ui#readme) to your project as these are _ALSO_ made to work well with Material-UI components

### Design Library: Storybook
Speaking of UI and Icons, this template comes with [storybook](https://storybook.js.org/) already setup with some useful addons to import your storybook tests, display and interact with them, and generate storyshots when you run tests.

### 

### All other pre-configurations you get with [Create React App]()...

## Project Structure
`cra-typescript` comes with a base setup of some things in the `src` directory. These are generally just my goto setup for projects to hit the ground running so including it here but feel free to scrap it all and start from scratch yourself 🤙🏽.

> TODO: Thorough outline of included `src` directory and files

## Additional Commands
Outside of your default cra commands I've added the following for ease of use:
- `yarn lint` runs ESLint for the project
- `yarn format` uses prettier to format all files in the project (writing over any files that require formating changes)
- `yarn storybook` starts storybook for local development
- `yarn build-storybook` builds storybook for production deployment
- `yarn serve-storybook` builds and locally serves a production version of your storybook

## `cra-typescript` is built following some useful guides found online
- [ESLint and Prettier Setup](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)

## Help and Contribute
While `cra-typescript` is primarily so that I can get up and running quickly with new projects, I love the idea of building something other developers find useful as well!
If you have a suggestion on how I can make this template project even better (technology moves fast and better tools may pop up to accomplish things) feel free to reach out to me or open up a pull request and let's work together!

------
# Default Create React App README below...

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
