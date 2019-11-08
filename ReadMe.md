# Quality Assurance Engineer Automation Test

## Requirements

There are two parts to this test. First part is to the ui test this has been setup to use testcafe and you will find the tests in `/ui-tests/login.js`. Second part is api tests they are found `/api-tests/login.test.js`

For both tests you are required to fill in the all the tests that are defined in the file. You may add more tests if you think they are required.

## Getting started

```
git clone
cd qa-test
npm install
```

There are two test frameworks that are required for the test.

1. [Jest](https://jestjs.io/) - For api testing
2. [TestCafe](https://devexpress.github.io/testcafe/) - For UI testing

They have already been setup for you.

### API Test endpoint

#### POST `/api/login`

- body
  - email: string
  - password: string

## UI Tesing

The website can be found at [https://sprinkle-burn.glitch.me/]()

### Running API tests

`npm run test:api`

### Running UI tests

`npm run test:ui`

### Running both tests

`npm run test`

### Tips

- Quality over quantity
- You have all the libraries you need to carry out the test
- Have you used the best css selector to get the element
- How easy is it to modify your test if the implementation changes
