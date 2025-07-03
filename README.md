# angular-atm-interface

A simple ATM user interface routing in Angular.

## Project Setup

### Software used

- Angular (20.0.5; `ng --version`)
- Node.js (v22.12.0); installed and switched to using `nvm install v22.12` (or `nvm use 22`)
- Typescript (5.5.3); `tsc --version`
- npm (v11)

### Installation

I first set up a new Github repository for the project, then cloned it to my local machine. In the checked out repository, I ran the following commands to set up the Angular project.

1. [Install Angular](https://angular.dev/installation) CLI globally:

   ```bash
   npm install -g @angular/cli
   ```

2. Create a new Angular project:

   ```bash
    ng new atm-user-interface
    cd atm-user-interface
    npm start
   ```

3. Create a new component for the ATM interface:
   ```bash
   # ng generate component balance
   ng g c balance
   ```

## Code Starter

Guided Coursera Project ["Build ATM User Interface using Routing in Angular"](https://www.coursera.org/learn/build-atm-user-interface-routing-angular).
The guided project uses an older version of Angular, so I had to make some adjustments to the code to work with the latest version.
