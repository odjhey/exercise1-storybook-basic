# Objective

Create 2 or more React components and add it to the component library browser (storybook)

# Requirement

This task is to measure how soon you can switch gears to using new tech. Also to gauge how you tackle similar non-tech problems.

Optional. Identify smart from dumb components.

# Evaluation

This exercise serves the purpose of evaluating your javascript(typescript) knowledge, code design skills, and other technical details on working in a distributed team setup

# Submission

- Please send a Pull Request to this repository for your final entry
- You have this week to complete this task (until July 24, 2020 but the earlier you submit the better). Let me know ASAP as soon as you complete so I can schedule a review meeting.

## Thank you! Please contact me for clarifications and further assistance.

# User Guide

> If you’re new to TypeScript and React, checkout [this handy cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet/)

## Commands

This repo has already a scaffold of a basic component library.

The recommended workflow is to run in one terminal:

```
yarn start # or npm start
```

This loads the stories from `./stories`.

> NOTE: Stories should reference the components as if using the library. This means importing from the root project directory. This has been aliased in the tsconfig and the storybook webpack config as a helper.

## Configuration

Code quality is setup with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

Jest tests are set up to run with `yarn test` or `npm test`. This runs the test watcher (Jest) in an interactive mode. By default, runs tests related to files changed since the last commit.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.
