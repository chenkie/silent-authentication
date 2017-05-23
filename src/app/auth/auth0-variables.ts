interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'w4ibtscMzP2Zs3jk6MteHwXZ422gGyQc',
  domain: 'blogtest.auth0.com',
  callbackURL: 'https://nameless-sea-38333.herokuapp.com',
  apiUrl: 'https://api.test.com'
};
