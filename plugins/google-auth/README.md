# Google Auth Plugin

Optional "Login with Google" button for the login page.

This is the frontend half of the plugin. The backend half lives in the
`plugins/google-auth` folder of the API starter and has to be enabled as well.

## Quick start

1. Enable and configure the plugin in the API
2. Set `GOOGLE_AUTH_ENABLED="yes"` in your `.env` file
3. Rebuild the app, because Next inlines the environment variables at build time

## Environment variables

- `GOOGLE_AUTH_ENABLED`: `yes` to show the button, anything else hides it
- `API_BASE_URL`: already required by the app, the button points at it

## How it works

The button is a plain link to `API_BASE_URL/auth/google`. There is no Google
script, no npm package and no change to the security headers.

```
/login              the button sends the browser to the API
                    the API talks to Google and sets the refresh token cookie
/auth/google        the API sends the browser back here
                    this page calls /refresh-token and stores the access token
/mgt-portal/admin   the user is logged in, exactly like after a password login
```

The access token never travels through a URL, so it cannot leak into the browser
history, into a Referer header or into server logs.

## Usage

The button renders `null` while the plugin is disabled, so no conditions are
needed on the page that uses it.

```jsx
import { GoogleButton } from '@plugins/google-auth/src';

<LoginForm />
<GoogleButton />
```

A different label can be passed in when needed.

```jsx
<GoogleButton label="Sign in with Google" />
```

## Error handling

The API redirects back with an `error` query param holding a short code, which
`googleError` turns into a message. Add your own codes in `src/google-error.js`
when you add new rules on the API side.
