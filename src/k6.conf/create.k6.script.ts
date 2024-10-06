type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
import path from 'path';
import fs from 'fs';
interface ApiDetails {
    url: string;
    method: Method;
    headers: Record<string, string>;
    body?: Record<string, unknown>;
    params: Record<string, string>;
  }
  
  interface PerformanceOptions {
    vus: number;
    duration: string;
  }
  export function createK6Script(apiDetails: ApiDetails, performanceOptions: PerformanceOptions): string {
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
  
    const scriptPath = path.resolve(__dirname, 'k6-test-script.js');
    fs.writeFileSync(scriptPath, scriptContent);
    return scriptPath;
  }
  