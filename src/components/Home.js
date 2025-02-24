import { useState, useEffect } from 'react';
import './Home.css';
import ToDo from './Todo';
import UsersList from './UsersList';
const Home = () => {
  return (
    <div>
      <ToDo />
      {/* <UsersList/> */}
    </div>
  );
};

export default Home;