import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import SetupLayout from '~/src/layouts/Setup';

const AddSecrets = dynamic(() => import('~/src/components/AddSecrets'), { ssr: false });

function Credentials() {
  const router = useRouter();

  return (
    <SetupLayout>
      <h1 className="text-xl font-semibold">Install Credentials</h1>
      <div className="mt-6  border-t border-gray-200 pt-5">
        <AddSecrets track={router.query.track} />
      </div>
    </SetupLayout>
  );
}

export default Credentials;
