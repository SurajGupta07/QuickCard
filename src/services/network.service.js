import { useEffect, useState } from 'react';

export const useNetworkStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener('offline', () => {
      setOnlineStatus(false);
    });

    window.addEventListener('online', () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};
