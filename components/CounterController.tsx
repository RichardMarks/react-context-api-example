import * as React from 'react';
import { useCountContext } from '../state/useCountContext';

export const CounterController = () => {
  const { count, updateCount } = useCountContext();

  const [nextCount, setNextCount] = React.useState<number>(0);

  const onNextCountChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNextCount(~~e.target.value);
    },
    []
  );

  const onIncrementCountButton = React.useCallback(() => {
    updateCount(count + 1);
  }, [count]);

  const onDecrementCountButton = React.useCallback(() => {
    updateCount(count - 1);
  }, [count]);

  const onResetCountButton = React.useCallback(() => {
    updateCount();
  }, []);

  const onUpdateCountButton = React.useCallback(() => {
    updateCount(nextCount);
  }, [nextCount]);

  return (
    <div>
      <h1>Counter Controller</h1>
      <p>Use the buttons below to modify the counter</p>
      <button onClick={onIncrementCountButton}>Increment the counter</button>
      <button style={{ marginLeft: 20 }} onClick={onDecrementCountButton}>
        Decrement the counter
      </button>
      <button style={{ marginLeft: 20 }} onClick={onResetCountButton}>
        Reset the counter
      </button>
      <p></p>
      <div>
        <input type="number" value={nextCount} onChange={onNextCountChange} />
        <button style={{ marginLeft: 20 }} onClick={onUpdateCountButton}>
          Update the counter
        </button>
      </div>
    </div>
  );
};
