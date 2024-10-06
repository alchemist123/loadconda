# LoadConda CLI

[![NPM version](https://img.shields.io/npm/v/loadconda)](https://www.npmjs.com/package/loadconda)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

LoadConda is a CLI tool that serves as a wrapper for the K6 performance testing tool from Grafana. With LoadConda, you can easily test the performance and stress levels of your APIs, ensuring they can handle the expected load and traffic efficiently.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
  - [`version`](#loadconda-version)
  - [`init test`](#loadconda-init-test)
- [Example](#example)
- [License](#license)
- [Author](#author)
- [Repository](#repository)

## Installation

Before installing, ensure you have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed on your machine. Then, install LoadConda globally using npm:

```bash
npm install -g loadconda

Usage
After installation, you can use the loadconda command to interact with the CLI. Here are some example commands to get started:
Commands
loadconda version
Displays the current version of the LoadConda CLI:
loadconda version

loadconda init test
Runs a K6 performance test with custom configurations. Use the following options to define the test parameters:

--vus <number>: Number of virtual users (default is 10)
--duration <time>: Duration of the test (default is 30 seconds)
loadconda init test --vus 20 --duration '60s'
License
This project is licensed under the MIT License.

Author
Created and maintained by Amal VS. Feel free to reach out for any questions or contributions.


**Note:** Be sure to replace `https://github.com/your-repo/loadconda` with the actual link to your GitHub repository.
