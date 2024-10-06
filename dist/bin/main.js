#!/usr/bin/env node
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
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const core_1 = require("../src/core");
const k6_conf_1 = require("../src/k6.conf");
const display_version_1 = require("../src/version/display.version");
const program = new commander_1.Command();
program
    .name('loadconda')
    .description('CLI tool for API performance testing using k6')
    .version('1.0.0');
program
    .command('version')
    .description('LoadConda CLI')
    .action(() => __awaiter(void 0, void 0, void 0, function* () { return yield (0, display_version_1.displayVersion)(); }));
program
    .command('init')
    .description('Initialize loadconda tool')
    // Define 'test' as a subcommand of 'init'
    .command('test')
    .description('Run a k6 performance test with custom VUs and duration')
    .option('--vus <number>', 'Number of virtual users', '10')
    .option('--duration <time>', 'Duration of the test', '30s')
    .action((options) => __awaiter(void 0, void 0, void 0, function* () {
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
    yield k6_conf_1.k6Conf_.ensureK6Availability();
    // Get API details from the user input
    const apiDetails = yield core_1.core_.getApiDetails();
    // Create and run the k6 script with the provided options
    const _script = k6_conf_1.k6Conf_.createK6Script(apiDetails, { vus, duration });
    yield k6_conf_1.k6Conf_.runK6(_script);
}));
program.parse(process.argv);
