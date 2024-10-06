import { spawn } from 'child_process';
import { displayVersion } from '../version/display.version';

export function runK6(scriptPath: string): void {
    displayVersion()
    console.log(`Running k6 test with script: ${scriptPath}...`);
  
    // Spawn a child process to execute the k6 command
    const k6Process = spawn('k6', ['run', scriptPath], { stdio: 'inherit' });
  
    k6Process.on('close', (code) => {
      if (code === 0) {
        console.log('k6 test completed successfully!');
      } else {
        console.error(`k6 test failed with exit code ${code}`);
      }
    });
  }