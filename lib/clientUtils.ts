import { useState, useEffect } from 'react';

export const useClient = () => {
  const [isMounted, setisMounted] = useState(false);
  useEffect(() => {
    setisMounted(true);
  }, []);
  return isMounted;
};
