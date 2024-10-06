"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureK6Availability = ensureK6Availability;
const check_k6_install_1 = require("./check.k6.install");
const install_k6_1 = require("./install.k6");
function ensureK6Availability() {
    if (!(0, check_k6_install_1.checkK6Installation)()) {
        const userInput = require('inquirer').prompt([
            {
                type: 'confirm',
                name: 'installK6',
                message: 'k6 is not installed. Would you like to install it now?',
                default: true,
            },
        ]);
        userInput.then((answers) => {
            if (answers.installK6) {
                (0, install_k6_1.installK6)();
                if ((0, check_k6_install_1.checkK6Installation)()) {
                    console.log('k6 installed successfully.');
                }
                else {
                    console.error('Failed to install k6. Please install it manually and try again.');
                }
            }
            else {
                console.error('k6 is required to run this CLI tool. Exiting...');
                process.exit(1);
            }
        });
    }
}
