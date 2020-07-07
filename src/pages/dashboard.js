import React from "react";
import styled from "styled-components";
import { Title } from "../components/shareComponents";
import Card from "../components/Card";
import { Gym, Badge } from "../icons";
import { colors } from "../styles/theme";

const CardWrapper = styled.div`
  display: flex;

  & * {
    margin-right: 2.5rem;
  }
  /* grid-template-columns: repeat(minmax(auto-fit, 250px)); */
`;

const HeadText = styled.p`
  font-size: 0.8rem;
`;

const Text = styled.p`
  font-size: 3.125rem;
  color: ${colors.white};
`;

const SubText = styled.p`
  font-size: 0.75rem;
  color: #94e0ea;
`;

const Dashboard = () => {
  return (
    <React.Fragment>
      <Title>Overview</Title>
      <CardWrapper>
        <Card>+ Add New Workout</Card>
        <Card color={colors.primaryColor2}>
          <HeadText>Workout Completed</HeadText>
          <Text>30</Text>
          <Gym />
          <SubText>Keep Grinding</SubText>
        </Card>
        <Card color={colors.primaryColor}></Card>
      </CardWrapper>
    </React.Fragment>
  );
};

export default Dashboard;
