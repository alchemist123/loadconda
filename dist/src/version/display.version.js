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
exports.displayVersion = displayVersion;
const figlet_1 = __importDefault(require("figlet"));
const chalk_1 = __importDefault(require("chalk"));
const version = '1.0.2';
function displayVersion() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(chalk_1.default.green(figlet_1.default.textSync('LOADCONDA CLI', { horizontalLayout: 'default' })));
        console.log(chalk_1.default.bgGray.black(` Version: ${version} `));
        console.log(chalk_1.default.gray('='.repeat(40)));
        console.log(chalk_1.default.yellowBright('LOADCONDA is a wrapper for K6 from Grafana:'));
        console.log(chalk_1.default.blueBright('you can test api perfomance here:'));
        console.log(chalk_1.default.white(`loadconda init test init test --vus <20> --duration '<60s>'   Test with 20 users in 60 second.`));
        console.log(chalk_1.default.white('loadconda version                  Display the current LOADCONDA CLI version.'));
        console.log(chalk_1.default.gray('='.repeat(40)));
    });
}
