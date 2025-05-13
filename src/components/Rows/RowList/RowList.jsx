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
        title="TRENDIG NOW"
        fetchurl={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row
        title="Top rate movie"
        fetchurl={requests.fetchTopRatedMovies}
        isLargeRow={true}
      />
      <Row
        title="Action movies"
        fetchurl={requests.fetchActionMovies}
        isLargeRow={true}
      />
      <Row
        title="Comedy movies"
        fetchurl={requests.fetchComedyMovies}
        isLargeRow={true}
      />
    </>
  );
};

export default RowList;
