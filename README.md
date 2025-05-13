# Typescript Webpack

> ECMAScript 6 project with Webpack and Typescript support for bundling and compiling to backward compatibility

![Header](/meta/header.png)

## Requirements

* [Node](https://nodejs.org/en/)

## Introduction

* **[Webpack](https://webpack.js.org)** -> Webpack is a bundler for modules. Main purpose is to bundle JavaScript modules in a browser.

## Goal

The Goal of this application is to bundle all the files in development process to a single file called **bundle.js** which will be deployed as a single file with retrocompatibility.

![Webpack Flowchart](/meta/flowchart-webpack.png)

## Setup

1. Download node and run the following command.

```bash
npm install
```

2. Start modifying the html, css and javascript files located in **src** folder.

3. To start livewatch just run  the following command.

```bash
npm run start:dev
```

4. To deploy a new version just run `npm run build-prod`

## Deployment

There are two build configurations, you can [learn more here](https://webpack.js.org/configuration/mode/)

To livewatch a dev environment run:

```bash
npm run start:dev
```

To create a production build:

```bash
npm run build-prod
```

To create a development build:

```bash
npm run build-dev
```

## Networking

The weather information is requested by the [open weather map API](https://openweathermap.org/current). It uses a free api token uploaded to be ready to use, feel free to create a new one for personal use.

## Credits

The layout is based in [this project ](https://codepen.io/Call_in/pen/pMYGbZ) created by **Colin Espinas**.

## Prompt

Run a prompt to add the missing features to the project. The prompt should be clear and concise, and should include all the necessary information to complete the task. The prompt should also include any relevant links or resources that may be helpful in completing the task.

```markdown
# Typescript Webpack

INSTRUCTION: Search the codebase and find any comment with TODO, these specific comments are placed to complete the code of this repository.


## Steps
1.Read all TODO comments, I.E. '// TODO: ...'
2. Convert this comments into tasks to complete
3. Create a plan of action to fix all the tasks
4. Apply the changes

## Notes
* Make sure to follow the code style of the project, and use the same libraries and tools already used in the project.
* Make sure to test the code after applying the changes, and make sure everything is working as expected.
* Make sure to add comments to the code, and explain what you are doing in each step.
* Make sure you read `index.html` to get the right ids for the elements you need to modify.

## Follow up tasks
Once everything is finished, I want to get two follow up tasks:

* Add try/catch blocks in all networking requests to control issues.
* Add a new UI elemnt in html and css, a spinner and add the logic to show it when a new request is triggered, and then hide it when needed
* Block the request button when starting a new request to avoid users pressint it multiple times

Apply these changes too and add the logic into index.ts to make the spinner and block the button too.
```
