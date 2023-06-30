'use client';
import { useGetUserByIdQuery } from '@/redux/services/userApi';
import Image from 'next/image';
import { FC } from 'react';

interface UserProps {
  id: string;
}

const User: FC<UserProps> = ({ id }) => {
  const { isLoading, isFetching, data, error } = useGetUserByIdQuery({ id });

  return (
    <div className='p-6'>
      <h2 className='text-center'>User</h2>

      <div className='flex justify-center'>
        {error ? (
          <p>There seems to be an error.</p>
        ) : isLoading || isFetching ? (
          <p>Loading...</p>
        ) : data ? (
          <div key={data.id} className='w-[100%] md:w-[50%]'>
            <Image
              src={`https://robohash.org/${data.id}?set=set2&size=300x300`}
              alt='image of robot'
              width={300}
              height={300}
              className='rounded-full mb-3 mx-auto'
            />
            <p className='text-lg font-bold text-gray-400 text-center'>
              {data.name}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default User;
