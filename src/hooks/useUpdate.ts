import { useEffect, useRef } from 'react';

const useUpdate = (fn: () => void, deps: any[]) => {
  const ref = useRef(0);
  useEffect(() => {
    ref.current += 1;
  });
  useEffect(() => {
    if (ref.current > 1) {
      fn();
    }
  }, [fn, deps]);
};
export default useUpdate;
