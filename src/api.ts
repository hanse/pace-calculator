import { createFetch } from '@devmoods/fetch';

export const fetch = createFetch({
  getRootUrl: () => '/api',
});
