import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import apiUrl from "../assets/api";
import Header from "./Header";

const CardDetail = () => {
  const { id } = useParams();
  //console.log(id);

  const detailURL = `${apiUrl.detail}${id}`;
  //console.log(detailURL);
  // const [data, error]=useApiCall(detailURL);
  // const detailcontent=data?.data.results

  const [apiData, setApiData] = useState([]); //list of all the movies
  

  useEffect(() => {
    const fetchData = async () => {
     
      try {
        const response = await axios.get(detailURL, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjdhNWIzYzdmZTQ3YzY5N2ViMDkxNWY5YzlmY2U1MSIsInN1YiI6IjY0ZTg3MmQ3YzYxM2NlMDBhYzQxNzkyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mbSH9jwoRG4NmfoSx9gsb_knLRsAabQOLgfdssM7YCw`,
          },
        });

        setApiData(response.data);
       
      } catch (e) {
        return e;
      }
    };
    fetchData();
  }, [detailURL]);

  //console.log(apiData);

  return (
    <>
    <Header/>
      <div className="container m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <img
              src={`https://image.tmdb.org/t/p/w500/${apiData.poster_path}`}
              className="img-fluid rounded-start"
              alt="Movie Poster"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body ">
              <div className="d-flex vw-100 align-items-center ">
                <h5 className="card-title fs-1 m-2">{apiData.original_title}</h5>
                <p className="card-text fs-1 m-2">
                  <small className="text-muted">({apiData.vote_average})</small>
                </p>
              </div>
              <div>
                <p className="card-text m-2">Release Date {apiData.release_date}</p>
              </div>
              <div>
                <p className="card-text m-2">Description: {apiData.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default CardDetail;
