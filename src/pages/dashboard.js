import React from "react";
import styled from "styled-components";
import { Link } from '@reach/router'
import { Title } from "../components/shareComponents";
import Card from "../components/Card";
import { Gym, Badge, Arms, Run, Abs } from "../icons";
import { colors } from "../styles/theme";
import RecentWorkouts from "../components/RecentWorkout";
import { WorkoutCard, WorkoutCardWrapper } from "../components/WorkoutCard";

const CardWrapper = styled.div`
  display: flex;
  margin-top: 1.25rem;

  & * {
    margin-right: 2.5rem;
  }
`;

const HeadText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #bdecf3;
`;

const Count = styled.h2`
  font-size: 4.8rem;
  color: ${colors.white};
  font-weight: bold;
`;

const SubText = styled.p`
  font-size: 0.8rem;
  color: #94e0ea;
  font-weight: bold;
`;

const NewWorkOutText = styled.p`
  font-weight: bold;
  color: ${colors.primaryColor2};
  margin: 0;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: -2rem;
  bottom: 3.2rem;
`;

const NewWorkoutCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
  width: 20.6rem;
  height: 12.5rem;
  cursor: pointer;
  border-radius: 10px;
  transition: all 300ms ease-in-out;

  &:hover {
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);
    transform: translateY(-0.5rem);
  }
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-bottom: 3rem; */

  a {
    color: #444;
  }
`;

const cards = [
  { name: "Cardio", icon: <Run /> },
  { name: "Arms", icon: <Arms /> },
  { name: "Abs", icon: <Abs /> },
  { name: "Legs", icon: <Run /> },
];

const Dashboard = () => {
  return (
    <React.Fragment>
      <Title>Overview</Title>
      <CardWrapper>
        <NewWorkoutCard>
          <NewWorkOutText>+ Start New Workout</NewWorkOutText>
        </NewWorkoutCard>
        <Card background={colors.primaryColor2}>
          <HeadText>Workouts Completed</HeadText>
          <Count>23</Count>
          <IconWrapper>
            <Gym />
          </IconWrapper>
          <SubText>Keep Grinding</SubText>
        </Card>
        <Card background={colors.primaryColor}>
          <HeadText>Workout Badge</HeadText>
          <Count>15</Count>
          <IconWrapper>
            <Badge />
          </IconWrapper>
          <SubText>Beginner</SubText>
        </Card>
      </CardWrapper>

      <Title>Workout Routines</Title>
      <WorkoutCardWrapper>
        {cards.map((card, index) => (
          <WorkoutCard key={index}>
            <p>{card.name}</p>
            <div>{card.icon}</div>
          </WorkoutCard>
        ))}
      </WorkoutCardWrapper>

      <StyledRow>
        <Title>Recent Workouts</Title>
        <Link to="/">View all</Link>
      </StyledRow>

      <RecentWorkouts />
    </React.Fragment>
  );
};

export default Dashboard;
