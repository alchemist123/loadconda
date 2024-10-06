"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createK6Script = createK6Script;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function createK6Script(apiDetails, performanceOptions) {
    // Validate performanceOptions
    if (isNaN(performanceOptions.vus) || !performanceOptions.duration) {
        throw new Error('Invalid performance options: VUs must be a number and duration must be a string.');
    }
    const scriptContent = `
    import http from 'k6/http';
    import { sleep } from 'k6';
  
    export const options = {
      vus: ${performanceOptions.vus},
      duration: '${performanceOptions.duration}',
    };
  
    export default function () {
      const url = '${apiDetails.url}';
      const params = {
        headers: ${JSON.stringify(apiDetails.headers)},
        params: ${JSON.stringify(apiDetails.params)},
      };
  
      const response = http.${apiDetails.method.toLowerCase()}(url, ${apiDetails.body ? JSON.stringify(apiDetails.body) : 'null'}, params);
      console.log('Response status: ' + response.status);
      sleep(1);
    }
    `;
    const scriptPath = path_1.default.resolve(__dirname, 'k6-test-script.js');
    fs_1.default.writeFileSync(scriptPath, scriptContent);
    return scriptPath;
}
