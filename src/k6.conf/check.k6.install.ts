import { execSync } from 'child_process';
export function checkK6Installation(): boolean {
    try {
      // Check if `k6` is available by running `k6 version`
      execSync('k6 version', { stdio: 'ignore' });
      console.log('k6 is already installed.');
      return true;
    } catch (error) {
      console.error('k6 is not installed or not available in PATH.');
      return false;
    }
}