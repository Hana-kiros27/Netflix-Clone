import React from "react";
import Row from "../Row/Row";
import requests from '../../../utils/requests'
const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchurl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="Trending Now"
        fetchurl={requests.fetchTrending}
        // isLargeRow={true}
      />
      <Row
        title="Top Rate Movie"
        fetchurl={requests.fetchTopRatedMovies}
        // isLargeRow={true}
      />
      <Row
        title="Action Movies"
        fetchurl={requests.fetchActionMovies}
        // isLargeRow={true}
      />
      <Row
        title="Comedy Movies"
        fetchurl={requests.fetchComedyMovies}
        // isLargeRow={true}
      />
      <Row
        title="Horror Movies"
        fetchurl={requests.fetchHorrorMovies}
        // isLargeRow={true}
      />
      <Row
        title="Romance Movies"
        fetchurl={requests.fetchRomanceMovies}
        // isLargeRow={true}
      />
      <Row
        title="Documentaries"
        fetchurl={requests.fetchDocumentaries}
        // isLargeRow={true}
       
      />

      <Row
        title="Tv shows"
        fetchurl={requests.fetchTvShow}
        // isLargeRow={true}
      />
    </>
  );
};

export default RowList;
