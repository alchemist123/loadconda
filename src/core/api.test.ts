type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
interface ApiDetails {
    url: string;
    method: Method;
    headers: Record<string, string>;
    body?: Record<string, unknown>;
    params: Record<string, string>;
}
export async function testApi(apiDetails: ApiDetails): Promise<boolean> {
    try {
      const response = await axios({
        url: apiDetails.url,
        method: apiDetails.method,
        headers: apiDetails.headers,
        data: apiDetails.body,
        params: apiDetails.params,
      });
  
      console.log(`API responded with status code: ${response.status}`);
      return true;
    } catch (error) {
      console.error(`API validation failed: ${(error as Error).message}`);
      return false;
    }
}