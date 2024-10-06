"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runK6 = runK6;
const child_process_1 = require("child_process");
function runK6(scriptPath) {
    console.log(`Running k6 test with script: ${scriptPath}...`);
    // Spawn a child process to execute the k6 command
    const k6Process = (0, child_process_1.spawn)('k6', ['run', scriptPath], { stdio: 'inherit' });
    k6Process.on('close', (code) => {
        if (code === 0) {
            console.log('k6 test completed successfully!');
        }
        else {
            console.error(`k6 test failed with exit code ${code}`);
        }
    });
}
