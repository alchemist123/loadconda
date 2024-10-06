#!/usr/bin/env node

import { Command } from 'commander';
import { core_ } from '../src/core';
import { k6Conf_ } from '../src/k6.conf';
import { displayVersion } from '../src/version/display.version';
const program = new Command();

program
  .name('loadconda')
  .description('CLI tool for API performance testing using k6')
  .version('1.0.0');
  program
  .command('version')
  .description('LoadConda CLI')
  .action( async() => await displayVersion());
  program
  .command('init')
  .description('Initialize loadconda tool')

  // Define 'test' as a subcommand of 'init'
  .command('test')
  .description('Run a k6 performance test with custom VUs and duration')
  .option('--vus <number>', 'Number of virtual users', '10')
  .option('--duration <time>', 'Duration of the test', '30s')
  .action(async (options) => {
    console.log('Received options:', options);

    // Parse and validate the options
    const vus = parseInt(options.vus, 10);
    const duration = options.duration;

    console.log(`Parsed VUs: ${vus}, Duration: ${duration}`);

    if (isNaN(vus)) {
      throw new Error('Invalid VUs: VUs must be a number.');
    }

    if (!duration || typeof duration !== 'string') {
      throw new Error('Invalid duration: Duration must be a non-empty string.');
    }

    await k6Conf_.ensureK6Availability();

    // Get API details from the user input
    const apiDetails = await core_.getApiDetails();

    // Create and run the k6 script with the provided options
    const _script = k6Conf_.createK6Script(apiDetails, { vus, duration });
    await k6Conf_.runK6(_script);
  });
  program.parse(process.argv);