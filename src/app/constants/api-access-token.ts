import { InjectionToken } from '@angular/core';

export interface AccessToken {
  paramName: string;
  value: string;
}

export const API_ACCESS_TOKEN = new InjectionToken<AccessToken>('API_ACCESS_TOKEN');
