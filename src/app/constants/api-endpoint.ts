import { InjectionToken } from '@angular/core';

export interface ApiEndpoint {
  endpoint: string;
  version: string;
}

export const API_ENDPOINT = new InjectionToken<ApiEndpoint>('API_ENDPOINT');
