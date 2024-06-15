<a href="https://www.inesdi.com/landing-maestrias/" target="blank"><img src="https://www.lectiva.com/assets/es/logos/centro/id/126420/size/m.jpg" ></a>

<p align="center">
  <a href="https://angular.dev/" target="blank"><img src="https://miro.medium.com/v2/resize:fit:1200/1*ltflx9wC-GBuLfnCpMkeLw.png" width="200" alt="Nest Logo" /></a>
</p>

## Description

Final project for the Full Stack Development INESDI Master. The project consists of a weather application that allows you to search for the weather in a specific city. The application is developed with Angular 17 and Clean Archirecture.

## Installation

```bash
1. Clone the repository
$ git clone git@github.com:Chris-AM/TypescriptWeatherExample.git
2. Instll Angular CLI
$ npm install -g @angular/cli
3. Nav to env config folder
$ cd src/app/config
4. Declare the .env file
$ cp app.environment.template.ts app.environment.local.ts
5. Fill the .env local file with the required data (sent by email)
6. Install the dependencies
$ yarn install --frozen-lockfile
```

## Running the app

```bash
# Start icons server
$ yarn run start:dev

# check if the server is running (POSTMAN or CURL)
curl --location 'http://localhost:3000/weather-icons'

# run the angular app
$ ng s || ng serve --open
```
***

## Architecture
<p align="center">
 <img src="src/assets/layers.png" width="600" alt="Nest Logo" />
</p>

- This project is based on the Clean Architecture principles.
- The project is divided into 5 layers: config, domain, infrastructure, use-cases, and presentation.
1) **Config**: Contains the configuration files of the application 
    - (Input) => `environment`
    - (Output) => `exposed routes`
2) **Domain**: Declares business logic of the application but does not contain any implementation. It contains the entities of the application. In this case, the entity is the weather entity.
    - (Input) => `open weather api response`
    - (Output) => `weather entity`
3) **Infrastructure**: Contains the implementation of the external services.
4) **Use-cases**: Contains the application use cases. This layer is the bridge between the domain and the infrastructure layers. It contains the business logic of the application and the use cases of the application. In this case, the use case is to search for the weather in a specific city
    - (Input) => `city name`
    - (Output) => `weather entity`
5) **Presentation**: Contains the presentation logic of the application.
