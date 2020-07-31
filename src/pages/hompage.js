import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Button from "../components/LoginButton";

const Container = styled.section`
  display: grid;
  grid-template-columns: 60% 1fr;
  height: 100vh;
`;

const LeftSide = styled.div`
  padding-left: 6rem;
`;

const RightSide = styled.div`
  background-size: cover;
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgba(117, 19, 93, 0.73)
    ),
    url("https://images.unsplash.com/photo-1576511420003-e33641629f94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
`;

const InfoSec = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 180px);
`;

const Text = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 3.2rem;
  margin-bottom: 1.8rem;
`;

const SmallText = styled.p`
  font-size: 1rem;
  color: #888;
  font-weight: 500;
`;

const Buttons = styled.div`
  display: flex;
  /* width: 40%; */
  /* grid-template-columns: 1fr 1fr; */
  grid-gap: 20px;
  margin-top: 3rem;
`;

const Homepage = () => {

  return (
    <Container>
      <LeftSide>
        <Nav />
        <InfoSec>
          <Text>
            Need a better way to <br />
            track your workouts?
          </Text>
          <SmallText>
            With workout tracker, you can track your <br /> workouts without hassle.
          </SmallText>
          <Buttons>
            <Button text="Register" />
            <Button variant='login' text="Login" />
          </Buttons>
        </InfoSec>
      </LeftSide>
      <RightSide />
    </Container>
  );
};

export default Homepage;
