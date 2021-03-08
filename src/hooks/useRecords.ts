import { useEffect, useState } from 'react';
import { MoneyProps } from 'views/Money';
import useUpdate from './useUpdate';

const useRecords = () => {
  const [records, setRecords] = useState<MoneyProps[]>([]);
  useEffect(() => {
    const currentRecords = JSON.parse(
      window.localStorage.getItem('records') || '[]'
    );
    setRecords(currentRecords);
  }, []); // 组件挂载时
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);
  const addRecord = (record: MoneyProps) => {
    setRecords([...records, record]);
  };
  return { records, addRecord };
};
export default useRecords;
