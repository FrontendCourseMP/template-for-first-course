# Project setup

## Install Node.js and Node Package Manager (npm)

### Why

We'll use Node.js to bundle the project and NPM to install dependencies

#### Linux

Usually there's package named `node` or `nodejs` in your distro repositories.

For detailed instructions please refer [official docs](https://nodejs.org/en/download/package-manager/)

#### Mac OS

Download .pkg installer [here](https://nodejs.org/en/download/) _or_ use [Homebrew](https://brew.sh/):

`brew install node`

#### Windows

Download latest LTS release [here](https://nodejs.org/en/download/)

![url=https://ibb.co/pQP3xLP](https://i.ibb.co/qCnRdrn/image.png)

By default NPM will be installed among Node.js.

Tip: you can also [install](https://github.com/nvm-sh/nvm#install--update-script) [nvm](https://github.com/nvm-sh/nvm) to manage and use multiple versions of Node.js

## Setup IDE (Integrated Development Environment)

To get the best experience while development. Usually includes features like syntax highlighting and code linting.

We recommend using Visual Studio Code (next just VSCode).

### Install VSCode

#### Any OS

You may download it [here](https://code.visualstudio.com/)

#### Unix

Via homebrew: `brew install --cask visual-studio-code`

You may also find package `visual-studio-code` in your distro repositories.

## Install recommended extensions for Visual Studio Code

To install any of this, press Ctrl+P in VSCode window and paste command

### Stylint

It will help you avoid errors and enforce conventions in your styles.

`ext install stylelint.vscode-stylelint`

### Prettier

This will keep you code formatting clean.

`ext install esbenp.prettier-vscode`

### ESlint

`ext install dbaeumer.vscode-eslint`

## Install Git

Git is system for controlling changes in project. It keeps history of all file changes.

### Windows

Download it [here](https://git-scm.com/download/windows)

### Unix

You probably already have it installed. Check is it installed first. Try perform `git --version` in terminal.

If it's not installed you may install package `git` with your package manager or refer instructions for [Mac OS](https://git-scm.com/download/mac)/[Linux](https://git-scm.com/download/linux)

## Preparing for the development

Click `Use this template` at the top of the page to create project from the template

### Open terminal

Next you will need terminal

#### VSCode

You may use terminal integrate to IDE. You may use Ctrl+` to show/hide terminal or Ctrl+shift+` to create new terminal.

#### Windows

You may use program named `cmd` (command prompt) or `powershell`

#### Unix

Use your favorite terminal app :)

### Clone the repository

Copy link from your Git repository

Use command `git clone LINK` in the directory where you want your project to be.

### Install dependencies

#### Cd into the repository

Use command `cd` to Change Directory (move to the directory)
`cd DIRECTORY`

e.g. `cd template-for-first-course`

#### Install dependencies itself

Use command `npm ci` (clean install) to install dependencies

## Run development server

Use command `npm run start` to start the development.
It will update your page and it's assets on any changes.

## Before building

You should check your code with `npm run test` and fix errors if there's any.

## Build production ready bundle

`npm run build`
It will create optimized bundle in `./build` directory which you can deploy to the server.
