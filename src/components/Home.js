import { useState, useEffect } from 'react';
import './Home.css';
import ToDo from './Todo';
import UsersList from './UsersList';
import ParentComponent from './usecallback/ParentComponent';
const Home = () => {
  return (
    <div>
      {/* <ToDo /> */}
      {/* <UsersList/> */}
      <ParentComponent/>
    </div>
  );
};

export default Home;