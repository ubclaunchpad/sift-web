# Sift Web
[![Build Status](https://api.travis-ci.org/ubclaunchpad/sift-web.svg?branch=master)](https://travis-ci.org/ubclaunchpad/sift-web)
[![Coverage Status](https://coveralls.io/repos/github/ubclaunchpad/sift-web/badge.svg?branch=master)](https://coveralls.io/github/ubclaunchpad/sift-web?branch=master)
[![ZenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://zenhub.com)

Web interface to the Sift app, using React.

The other components to Sift are in these repositories:
The following repositories contain Sift services:
* [sift-base](https://github.com/ubclaunchpad/sift-base)
* [sift-api](https://github.com/ubclaunchpad/sift-api)
* [sift-nlp](https://github.com/ubclaunchpad/sift-nlp)


## Setup

Clone and install dependencies.
```sh
git clone https://github.com/ubclaunchpad/sift-web.git
cd sift-web
npm install
```

Build source. Output will be in `bin`.
```sh
npm run build
```

Run development server. On port 8080 by default.
```sh
npm run dev
```

Run tests.
```sh
npm run jest
```

## ESLint

We use ESLint and the [UBC Launch Pad ESLint configuration](https://www.npmjs.com/package/eslint-config-ubclaunchpad). Ensure you install ESLint in your text editor of choice before contributing.

## Testing

We use [Jest](https://facebook.github.io/jest/) for testing. Every component must have a corresponding test. If you have a component at `src/components/MyComponent.js`, you should add a test file at `src/components/__tests__/MyComponent.test.js`.
