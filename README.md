# Typescript Webpack

> ECMAScript 6 project with Webpack and Babel support for bundling and compiling to backward compatibility

![Header](/meta/header.png)

## Requirements

* [Node](https://nodejs.org/en/)

## Introduction

* **[Webpack](https://webpack.js.org)** -> Webpack is a bundler for modules. Main purpose is to bundle JavaScript modules in a browser.

## Goal

The Goal of this application is to bundle all the files in development process to a single file called **bundle.js** which will be deployed as a single file with retrocompatibility.

![Webpack Flowchart](/meta/flowchart-webpack.png)

## Setup

1. Download node and run the following command

```bash
npm install
```

2. Start modifying the html, css and javascript files located in **src** folder

3. To start livewatch just run  the following command

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

