import { FC } from 'react';
import Count from './Count';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <div>
      <h1 className='text-center'>Home</h1>
      <Count />
    </div>
  );
};

export default Home;
