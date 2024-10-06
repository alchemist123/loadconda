"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureK6Availability = ensureK6Availability;
const inquirer_1 = __importDefault(require("inquirer"));
const check_k6_install_1 = require("./check.k6.install");
const install_k6_1 = require("./install.k6");
function ensureK6Availability() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(0, check_k6_install_1.checkK6Installation)()) {
            // Prompt the user for installation
            const answers = yield inquirer_1.default.prompt([
                {
                    type: 'confirm',
                    name: 'installK6',
                    message: 'k6 is not installed. Would you like to install it now?',
                    default: true,
                },
            ]);
            // If the user confirms, install k6
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
        }
    });
}
