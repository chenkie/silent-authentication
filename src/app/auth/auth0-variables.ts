interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'w4ibtscMzP2Zs3jk6MteHwXZ422gGyQc',
  domain: 'blogtest.auth0.com',
  callbackURL: 'https://silent-auth.now.sh/callback',
  apiUrl: 'https://api.test.com'
};
