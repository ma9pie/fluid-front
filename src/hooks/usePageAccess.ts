import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { IS_PRODUCTION } from '@/constants';

const usePageAccess = () => {
  const router = useRouter();

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (IS_PRODUCTION) {
      router.push('/');
    } else {
      setIsShow(true);
    }
  }, [router.isReady]);

  return { isShow };
};

export default usePageAccess;
