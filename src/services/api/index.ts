interface DefaultHeaders {
  [key: string]: string
}

export default class Api {
  baseUrl = 'http://localhost:3000'
  defaultHeaders: DefaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }

  constructor(
    private nextConfig: NextFetchRequestConfig | undefined = undefined
  ) {
    this.baseUrl = process.env.API_URL || this.baseUrl

    const stage = process.env.STAGE || 'development'

    if (stage === 'local') {
      this.defaultHeaders['cache-control'] = 'no-cache'
    }
  }

  public async get<T>(url: string): Promise<T> {
    const response = fetch(`${this.baseUrl}${url}`, {
      method: 'GET',
      headers: this.defaultHeaders,
      next: this.nextConfig
    })

    return response.then<T>(res => {
      return res.status === 200
        ? res.json()
        : Promise.reject(res.statusText)
    })
    .catch(err => {
      console.error(err)
      return Promise.reject(err)
    })
  }

  public async post<T>(url: string, data: any): Promise<T> {
    const response = fetch(`${this.baseUrl}${url}`, {
      method: 'POST',
      headers: this.defaultHeaders,
      next: this.nextConfig,
      body: JSON.stringify(data)
    })

    return response.then<T>(res => {
      return [200, 201].includes(res.status) 
        ? res.json()
        : Promise.reject(res.statusText)
    })
  }
}
