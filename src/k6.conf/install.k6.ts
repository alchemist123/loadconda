import { spawnSync } from 'child_process';
import os from 'os';

export function installK6(): void {
  const platform = os.platform();

  switch (platform) {
    case 'darwin': // macOS
      console.log('Installing k6 for macOS using Homebrew...');
      spawnSync('brew', ['install', 'k6'], { stdio: 'inherit' });
      break;
      
    case 'linux': // Linux
      console.log('Installing k6 for Linux...');
      console.log('Please ensure you have root privileges to run this command.');
      spawnSync('sudo', ['apt-get', 'install', '-y', 'k6'], { stdio: 'inherit' });
      break;
      
    case 'win32': // Windows
      console.log('Installing k6 for Windows using winget...');
      const installResult = spawnSync('winget', ['install', 'k6', '--source', 'winget'], { stdio: 'inherit' });

      // Check if the installation was successful
      if (installResult.error) {
        console.error('Failed to install k6 using winget. Please install manually or ensure winget is configured.');
        console.log('If you do not have winget installed, follow the instructions at https://github.com/microsoft/winget-cli to install it.');
      } else {
        console.log('k6 installed successfully on Windows.');
      }
      break;

    default:
      console.error(`Unsupported OS: ${platform}. Please install k6 manually from https://k6.io/docs/getting-started/installation/`);
  }
}