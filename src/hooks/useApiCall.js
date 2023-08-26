import {useState,useEffect} from 'react';
import axios from 'axios';


const useApiCall = (URL) => {

  
    const [apiData,setApiData]=useState([]);//list of all the movies
    const [loading,setLoading]=useState(false);//show loading logo conditionally
    const [error,setError]=useState(null);


    useEffect(()=>{
        const fetchData=async ()=>{
            setLoading(true);
            try{
                const response= await axios.get(URL,{
                    headers: {
                      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjdhNWIzYzdmZTQ3YzY5N2ViMDkxNWY5YzlmY2U1MSIsInN1YiI6IjY0ZTg3MmQ3YzYxM2NlMDBhYzQxNzkyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mbSH9jwoRG4NmfoSx9gsb_knLRsAabQOLgfdssM7YCw`
                    }
                  });
                
                setApiData(response.data.results);
                console.log(response.data)
                setLoading(false);
            }
            catch(e)
            {
                setError(e.message);
                setLoading(false);
            }

        };
        fetchData()},[URL])
    
  return [apiData,loading, error]
}

export default useApiCall;
