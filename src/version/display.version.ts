import figlet from 'figlet';
import chalk from 'chalk';
const version = '1.0.2';

export async function displayVersion(): Promise<void> {
  console.log(
    chalk.green(figlet.textSync('LOADCONDA CLI', { horizontalLayout: 'default' }))
  );

  console.log(chalk.bgGray.black(` Version: ${version} `));
  console.log(chalk.gray('='.repeat(40)));
  console.log(chalk.yellowBright('LOADCONDA is a wrapper for K6 from Grafana:'));
  console.log(chalk.blueBright('you can test api perfomance here:'));
  console.log(chalk.white(`loadconda init test init test --vus <20> --duration '<60s>'   Test with 20 users in 60 second.`));
  console.log(chalk.white('loadconda version                  Display the current LOADCONDA CLI version.'));
  console.log(chalk.gray('='.repeat(40)));

}
