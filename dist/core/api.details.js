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
exports.getApiDetails = getApiDetails;
const inquirer_1 = __importDefault(require("inquirer"));
function getApiDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield inquirer_1.default.prompt([
            {
                type: 'input',
                name: 'url',
                message: 'Enter the API URL:',
                validate: (input) => (input ? true : 'API URL is required'),
            },
            {
                type: 'list',
                name: 'method',
                message: 'Select HTTP method:',
                choices: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
                default: 'GET',
            },
            {
                type: 'input',
                name: 'headers',
                message: 'Enter headers as JSON (e.g., {"Authorization": "Bearer token"}):',
                default: '{}',
                filter: (input) => JSON.parse(input),
            },
            {
                type: 'input',
                name: 'body',
                message: 'Enter request body as JSON (leave empty for GET requests):',
                default: '{}',
                when: (answers) => ['POST', 'PUT'].includes(answers.method),
                filter: (input) => (input ? JSON.parse(input) : {}),
            },
            {
                type: 'input',
                name: 'params',
                message: 'Enter URL parameters as JSON (e.g., {"id": "123"}):',
                default: '{}',
                filter: (input) => JSON.parse(input),
            }
        ]);
    });
}
