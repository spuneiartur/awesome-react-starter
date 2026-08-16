import refreshToken from '@api/refresh-token';
import { store } from '@auth';
import { Loading } from '@components';
import { router, toaster } from '@lib';
import { googleError } from '@plugins/google-auth/src';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Page = () => {
  const { isReady, query } = useRouter();

  useEffect(() => {
    if (!isReady) {
      return;
    }

    if (query.error) {
      toaster.error(googleError(query.error));
      router.replace('/login');
      return;
    }

    // The refresh token cookie is already set, exchange it for an access token
    refreshToken()
      .then((token) => {
        store.dispatch({ type: 'SET', jwt: token });
        toaster.success('Login successful');
        router.replace('/mgt-portal/admin');
      })
      .catch(() => {
        toaster.error(googleError());
        router.replace('/login');
      });
  }, [isReady, query]);

  return (
    <main className="cover flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <Loading />
    </main>
  );
};

export default Page;
