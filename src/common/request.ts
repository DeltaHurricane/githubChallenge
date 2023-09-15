const TOKEN = import.meta.env.VITE_GIT_TOKEN;

const defaultHeaders: HeadersInit = {
  'Content-Type': 'application/json;charset=UTF-8',
  'Authorization': `token ${TOKEN}`
};

const fetchRequest = <TResponse>(url: string, config: RequestInit = {}): Promise<TResponse> =>
  fetch(url, config)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong');
    })
    .then((data) => data as TResponse);

const request = {
  get: <TResponse>(url: string) =>
    fetchRequest<TResponse>(url, { method: 'GET', headers: defaultHeaders }),
};

export enum ERequestStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
}

export default request;
