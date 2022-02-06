import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'hrtk92',
  apiKey: process.env.API_KEY || '',
});
