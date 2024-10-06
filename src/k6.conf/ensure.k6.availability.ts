import inquirer from 'inquirer';
import { checkK6Installation } from "./check.k6.install";
import { installK6 } from "./install.k6";

export async function ensureK6Availability(): Promise<void> {
  if (!checkK6Installation()) {
    // Prompt the user for installation
    const answers = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'installK6',
        message: 'k6 is not installed. Would you like to install it now?',
        default: true,
      },
    ]);

    // If the user confirms, install k6
    if (answers.installK6) {
      installK6();
      if (checkK6Installation()) {
        console.log('k6 installed successfully.');
      } else {
        console.error('Failed to install k6. Please install it manually and try again.');
      }
    } else {
      console.error('k6 is required to run this CLI tool. Exiting...');
      process.exit(1);
    }
  }
}
