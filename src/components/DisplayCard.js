import React from 'react';
import useApiCall from '../hooks/useApiCall';
import Card from './Card';
import './DisplayCard.css';


const DisplayCard = (props) => {
   
    const {URL} = props;
    const [data, loading, error] = useApiCall(URL); //custom hook to fetch api data
   // console.log(data);
 

    
  return (
    <div className='display'>
      { loading?<h1>Loading.....</h1>:
        error?<h1>Your data is facing error to get loaded</h1>:
        data && data.length>0 && 
        data?.map((item)=>{
           return <div key={item.id}> <Card item={item}/></div>
        })
      }
    </div>
  );
}

export default DisplayCard;
