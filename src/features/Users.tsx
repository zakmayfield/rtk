'use client';
import { useGetUsersQuery } from '@/redux/services/userApi';
import Image from 'next/image';
import { FC } from 'react';
Image;

interface UsersProps {}

const Users: FC<UsersProps> = ({}) => {
  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);
  return (
    <div>
      <h2 className='text-center'>Users</h2>

      <div>
        {error ? (
          <p>There seems to be an error.</p>
        ) : isLoading || isFetching ? (
          <p>Loading...</p>
        ) : data ? (
          // container
          <div className='p-6 flex justify-center'>
            {/* cards container */}
            <div className='flex flex-wrap gap-3 '>
              {data.map((user) => (
                // card
                <div key={user.id} className='w-[30%] md:w-[22%]'>
                  <Image
                    src={`https://robohash.org/${user.id}`}
                    alt='image of robot'
                    width={150}
                    height={150}
                    className='rounded-full mb-3'
                  />
                  <p className='text-xs font-bold text-gray-400 text-center'>
                    {user.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Users;
