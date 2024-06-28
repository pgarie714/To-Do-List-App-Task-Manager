# Todo Angular App - Overview

Simple todo application with date for the todo's.

## Tech Stack

 * Node v14.15.1
 * Angular v11.2.13
 * Angular CLI v11.2.12
 * Bootstrap v4.6
 * ng-bootstrap v9.1.0
 * Scss

## Quick start

```bash
# install the repo with npm
npm install

# start the server
npm start

```
and in your browser go to [http://localhost:4200](http://localhost:4200) 



## Application Architecture

* Components directory contains todo list components

* Pipes directory contains pipes to transform data

* Interface directory contains all interfaces used in application

* Service diecrory contains all provider services



## Setting up the dev environment
	1. Node js and npm setup

		Download and install nodejs from [here](https://nodejs.org/en/)
		
		Verify installation

		Run below command in command prompt or terminal to verify Node js and npm is installed correctly 

		`node -v && npm -v`
	2. Install Angular Cli
		
		Angular CLI is needed for you to be able to build/run your project from a local machine.

		Navigate to your command prompt/terminal and run the below command to install  `@angular/cli`
		
		`npm install -g @angular/cli`

		To verify installation run the below command and see the output.

		`ng version`

	3. Installing project from zip file

		Unzip the file to the desired location on your machine

		Navigate to the unzipped project location, cd to project parent directory, and run

		`npm install`

		Above will install all dependent modules (dependencies) and you will be good to go.

## Development server
Run `ng serve` from your project home directory to start a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build and Deployment

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. Then ou can deploy this content inside dist folder to any http server like s3 bucket.

## Running unit tests
* `npm run lint`
* `npm run test`
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
