import { sign } from 'crypto';

export function signRequest (requestBody: object, privateKey: string) {
  const stringRequestBody = JSON.stringify(requestBody);

  return sign('RSA-SHA256', Buffer.from(stringRequestBody), privateKey).toString('base64');
}
