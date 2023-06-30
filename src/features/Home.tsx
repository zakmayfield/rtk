import { FC } from 'react';
import Count from './Count';
import Users from './Users';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <div className='flex flex-col gap-12 p-6'>
      <Count />
      <Users />
    </div>
  );
};

export default Home;
