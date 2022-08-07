import React from "react";
import { Main } from "../components/Main";
import { Row } from "../components/Row";
import requests from "../Requests";
export const Home = () => {
  return (
    <>
      <Main></Main>
      <Row title="Up Coming" fetchUrl={requests.requestUpcoming}></Row>
      <Row title="Popular" fetchUrl={requests.requestPopular}></Row>
      <Row title="Trending" fetchUrl={requests.requestTrending}></Row>
      <Row title="Horror" fetchUrl={requests.requestHorror}></Row>
      <Row title="Top Rated" fetchUrl={requests.requestTopRated}></Row>
    </>
  );
};
