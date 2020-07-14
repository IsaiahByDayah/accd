## What is `cra-typescript`? 🤷🏽‍♂️
`cra-typescript` is a barebones [Create React App](https://github.com/facebook/create-react-app) project, setup to use [TypeScript](https://www.typescriptlang.org), and comes with some pre-configurations I general find useful:

### Linting: ESLint
With the recent sunsetting of [TSLint](https://palantir.github.io/tslint/), [ESLint](https://eslint.org/) is becoming the recommended way of [linting with TypeScript](https://github.com/Microsoft/TypeScript/issues/29288#developer-productivity-tools-and-integration).

### Formatting: Prettier
To help files inline with the linting rules provided by ESLint, we use [prettier](https://prettier.io/) (along with the [VS Code plugin](https://github.com/prettier/prettier-vscode)) to auto format our files.

### UI: Material-UI
I find [Material-UI](https://material-ui.com) to be an _incredibly_ useful library and so I include it in this package. Some people prefer the [Ant Design](https://ant.design/docs/react/introduce) library though (as well as [others](https://designrevision.com/react-component-libraries/)) so feel to swap this out with whatever you prefer

#### Icons: Material-UI/icons
[Material-UI](https://material-ui.com) also supplies some nice [icons](https://material-ui.com/components/material-icons/) that work well with its components. If you find yourself wishing you had more, I suggest adding [Material Design Icons](https://github.com/TeamWertarbyte/mdi-material-ui#readme) to your project as these are _ALSO_ made to work well with Material-UI components

#### className management: classnames
[classnames](https://github.com/JedWatson/classnames) is a powerful, yet lightweight tool for managing...well, classnames. Because MUI make it easy to create css styles and apply them via a components `className` prop, I've since added this for convenience

### Design Library: Storybook
Speaking of UI and Icons, this template comes with [storybook](https://storybook.js.org/) already setup with some useful addons to import your storybook tests, display and interact with them, and generate storyshots when you run tests.

### Routing: React Router
[React Router](https://reacttraining.com/react-router/) is a fantastic routing/navigation library for React web apps and is included in this template 👍🏽

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
