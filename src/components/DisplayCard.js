import React from 'react';
import Error from './Error';
import Card from './Card';
import './DisplayCard.css';




const DisplayCard = (props) => {
    const {data,loading,error}=props;
    // const {URL} = props;
    
 

    
  return (
    <>
    <div className='display'>
      { loading?<h1>Loading.....</h1>:
        error?<Error msg={error}/>:
        data && data.length>0 && 
        data?.map((item)=>{
           return <div key={item.id}> <Card item={item}/></div>
        })
      }
    </div>
   
    </>
  );
}

export default DisplayCard;
