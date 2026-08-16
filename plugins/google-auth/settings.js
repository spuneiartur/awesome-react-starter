/**
 * The plugin is turned on at build time, because Next inlines the env variables.
 * Turning it on or off requires a rebuild of the app.
 */
const settings = {
  enabled: process.env.GOOGLE_AUTH_ENABLED === 'yes',
  startUrl: `${process.env.API_BASE_URL}/auth/google`,
};

export default settings;
