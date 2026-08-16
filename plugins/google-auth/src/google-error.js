const messages = {
  'account-not-active': 'Your account is not active',
  'account-not-found': 'This account no longer exists',
  'domain-not-allowed': 'Your email domain is not allowed to sign in',
  'email-in-use': 'This email already has an account, please log in with your password',
  'email-not-verified': 'Your Google email address is not verified',
  'no-account': 'There is no account for this email address',
};

/**
 * Turns an error code returned by the API into a message for the user
 *
 * @param {string} code The error code from the query string
 * @returns {string} The message to show
 */
const googleError = (code) => {
  return messages[code] || 'We cannot log you in with Google at the moment';
};

export default googleError;
