import settings from '../settings';
import GoogleIcon from './GoogleIcon';

/**
 * Renders nothing while the plugin is disabled, so the login page needs no logic.
 * This is a plain link, the whole OAuth dance happens on the API.
 */
const GoogleButton = ({ label = 'Continue with Google' }) => {
  if (!settings.enabled) {
    return null;
  }

  return (
    <div className="mt-6">
      <div className="mb-4 flex items-center">
        <div className="grow border-t border-gray-200" />
        <span className="mx-3 text-sm text-gray-500">or</span>
        <div className="grow border-t border-gray-200" />
      </div>
      <a
        href={settings.startUrl}
        className="button full flex w-full items-center justify-center gap-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
      >
        <GoogleIcon className="h-5 w-5" />
        <span>{label}</span>
      </a>
    </div>
  );
};

export default GoogleButton;
