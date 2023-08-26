import React from 'react';
import Header from './Header';
import apiUrl from '../assets/api';
import DisplayCard from './DisplayCard';

const HomePage = () => {
  return (
    <div>
     

      <Header/>
      <DisplayCard URL={apiUrl.upcoming}/>
    </div>
  );
}

export default HomePage;
