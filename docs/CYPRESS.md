# Testing web components with Cypress

I decided to test web components and demo sites with Cypress. I think that Cypress offers best coverage and best developer experience in this case.

Test for all modules and demos are in e2e folder.

## Setup

I created e2e folder where I will put all Cypress files to test all web components and demo websites.

`cypress.json` is in the root of the project and Cypress is defined as dependecy in the root package.json file. In the cypress.json file I point to e2e/plugins/index.js file where Cypress locations are provided. This approach is 'borrowed' from [this example setup](https://github.com/cypress-io/cypress-gh-action-vue-example).

## CI/CD Cypress setup with Github actions

I still looking for the optimal approach of integrating Cypress tests into CI/CD pipelines. I also want to test Github actions for CI/CD. This is yet another new approach to be tested in this project :-).

There is an example setup in Cypress repo I need to study more in details and decide how I want to integrate it in this project.
