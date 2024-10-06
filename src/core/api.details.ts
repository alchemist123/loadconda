import inquirer from 'inquirer';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface ApiDetails {
  url: string;
  method: Method;
  headers: Record<string, string>;
  body?: Record<string, unknown>;
  params: Record<string, string>;
}

export async function getApiDetails(): Promise<ApiDetails> {
  return await inquirer.prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Enter the API URL:',
      validate: (input: string) => (input ? true : 'API URL is required'),
    },
    {
      type: 'list',
      name: 'method',
      message: 'Select HTTP method:',
      choices: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      default: 'GET',
    },
    {
      type: 'input',
      name: 'headers',
      message: 'Enter headers as JSON (e.g., {"Authorization": "Bearer token"}):',
      default: '{}',
      filter: (input: string) => {
        if (!input.trim()) return {};
        try {
          return JSON.parse(input);
        } catch (error) {
          console.error('Invalid JSON format for headers. Please provide a valid JSON string.');
          return {};
        }
      },
    },
    {
      type: 'input',
      name: 'body',
      message: 'Enter request body as JSON (leave empty for GET requests):',
      default: '{}',
      when: (answers) => ['POST', 'PUT'].includes(answers.method),
      filter: (input: string) => {
        if (!input.trim()) return {};
        try {
          return JSON.parse(input);
        } catch (error) {
          console.error('Invalid JSON format for body. Please provide a valid JSON string.');
          return {};
        }
      },
    },
    {
      type: 'input',
      name: 'params',
      message: 'Enter URL parameters as JSON (e.g., {"id": "123"}):',
      default: '{}',
      filter: (input: string) => {
        if (!input.trim()) return {};
        try {
          return JSON.parse(input);
        } catch (error) {
          console.error('Invalid JSON format for params. Please provide a valid JSON string.');
          return {};
        }
      },
    }
  ]);
}
