import React,{useState} from 'react';
import Header from './Header';
import apiUrl from '../assets/api';
import DisplayCard from './DisplayCard';
import Pagination from "../components/Pagination";
import useApiCall from '../hooks/useApiCall';



const HomePage = () => {
  const [pageNum, setPage] = useState(1);
  const URL= apiUrl.upcoming+`?page=`+pageNum;
 // console.log(URL);
  const [data, loading, error,total_pages] = useApiCall(URL); //custom hook to fetch api data
  

    /* Pagination handlers*/
    const onPrev = () => {
      if (pageNum > 1) {
          setPage(pageNum - 1);
      }
  }
  const onNext = () => {
    if (pageNum < total_pages) {
      setPage(pageNum + 1);
   }

  }
  
  return (
    <div>
     

      <Header/>
      <DisplayCard  data={data} loading={loading} error={error}/>
      <Pagination pageNum={pageNum}
                onPrev={onPrev}
                onNext={onNext} URL={apiUrl.upcoming+`?page=`+pageNum}/>
      
    </div>
  );
}

export default HomePage;
