import { useEffect, useRef } from 'react';

const useUpdate = (fn: () => void, deps: any[]) => {
  const ref = useRef(0);
  useEffect(() => {
    ref.current += 1;
  }); // 不写依赖数组，表示页面每次渲染时都执行
  useEffect(() => {
    if (ref.current > 1) {
      fn();
    }
  }, [fn, deps]);
};
export default useUpdate;
