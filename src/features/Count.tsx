'use client';

import { FC } from 'react';
import { increment, decrement, reset } from '@/redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

interface CountProps {}

const Count: FC<CountProps> = ({}) => {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();

  return (
    <div className='flex flex-col'>
      <h2 className='text-center mb-6'>Count: {count}</h2>

      <div className='flex flex-col gap-3 items-center'>
        <div className='flex gap-6'>
          <button
            onClick={() => dispatch(decrement())}
            className='border rounded-md px-3 w-24'
          >
            -
          </button>
          <button
            onClick={() => dispatch(increment())}
            className='border rounded-md px-3 w-24'
          >
            +
          </button>
        </div>

        <div>
          <button
            onClick={() => dispatch(reset())}
            className='w-48 mx-3 border rounded-md'
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Count;
