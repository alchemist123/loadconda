"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkK6Installation = checkK6Installation;
const child_process_1 = require("child_process");
function checkK6Installation() {
    try {
        // Check if `k6` is available by running `k6 version`
        (0, child_process_1.execSync)('k6 version', { stdio: 'ignore' });
        console.log('k6 is already installed.');
        return true;
    }
    catch (error) {
        console.error('k6 is not installed or not available in PATH.');
        return false;
    }
}
