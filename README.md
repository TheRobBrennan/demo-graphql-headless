# Welcome
This project is intended to serve as an example for working with GraphQL using the Apollo Client on the command line in a Node.js project.

Special thanks to Robin Wieruch for starting off with this example in [The Road to GraphQL](https://www.robinwieruch.de/the-road-to-graphql-book/).

## Getting started

### Initial setup
You will need to create a `.env` file which contains the following environment variables:

```sh
GITHUB_GRAPHQL_ENDPOINT=https://api.github.com/graphql
GITHUB_PERSONAL_ACCESS_TOKEN=<YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>
```

For more information on [creating a personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/#creating-a-token) with GitHub, please see this [guide](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/#creating-a-token).

### Run the application
Once you have configured your `.env` file, all you need to do is installed the required modules and start your application:

```sh
$ npm install
$ npm start
```

# Simple Node Server with Babel
[![Build Status](https://travis-ci.org/rwieruch/node-babel-server.svg?branch=master)](https://travis-ci.org/rwieruch/node-babel-server) [![Slack](https://slack-the-road-to-learn-react.wieruch.com/badge.svg)](https://slack-the-road-to-learn-react.wieruch.com/) [![Greenkeeper badge](https://badges.greenkeeper.io/rwieruch/node-babel-server.svg)](https://greenkeeper.io/)

An easy way to get started with JavaScript on the command line. [Read more about it](https://www.robinwieruch.de/minimal-node-js-babel-setup).

## Features

* Babel 7
* Environment Variables

## Requirements

* [node & npm](https://nodejs.org/en/)
* [git](https://www.robinwieruch.de/git-essential-commands/)

## Installation

* `git clone git@github.com:rwieruch/node-babel-server.git`
* `cd node-babel-server`
* `npm install`
* `npm start`
* optional: include *.env* in your *.gitignore*
