import axios, { Axios } from 'axios';

import { ErrorFactory } from '../errors/ErrorFactory';
export abstract class AbstractService {
  protected axios: Axios;

  protected constructor (baseUrl: string, apiKey: string) {
    this.axios = axios.create({
      baseURL: baseUrl,
    });
    this.axios.defaults.headers.common['Content-Type'] = 'application/json';
    this.axios.defaults.headers.common['api-key'] = apiKey;

    this.axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          throw ErrorFactory.createErrorByCode(error.response.status, error.response.data.message ?? JSON.stringify(error.response.data));
        } else if (error.request) {
          throw new Error('Response was not received from server. ' + error.message);
        } else {
          throw new Error(error.message);
        }
      },
    );
  }
}
