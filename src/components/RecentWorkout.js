import React from "react";
import styled from "styled-components";
import { colors } from "../styles/theme";

const RecentWorkoutWrapper = styled.div`
  max-width: 1000px;

  & * {
    display: grid;
    align-items: center;
    justify-content: start;
  }

  .heading {
    grid-template-columns: repeat(4, 1fr);
    padding: 0 1.2rem;
    font-weight: bold;
    font-size: 0.9rem;
    color: #617690;
    margin-bottom: 1.5rem;
  }
`;

const StyledRecentWorkout = styled.div`
  grid-template-columns: repeat(4, 1fr);
  background: ${colors.white};
  color: #8a8a8a;
  transition: all 0.2s ease-in-out;
  background: ${colors.white};
  margin-bottom: 1rem;
  padding: 0.8rem 1.2rem;

  &:hover {
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);
    transform: translateY(-0.5rem) scale(1.02);
  }

  .name {
    color: ${colors.primaryColor};
    /* font-weight: bold; */
    cursor: pointer;
  }
`;

const recentWorkouts = [
  {
    name: "Jump Rope",
    category: "Cardio",
    date: "30 June, 2020",
    durationSets: "1hr 30mins",
  },
  {
    name: "Bicep Curls",
    category: "Arms",
    date: "02 June, 2020",
    durationSets: "3 sets",
  },
  {
    name: "Squats",
    category: "Lower Body",
    date: "03 July, 2020",
    durationSets: "4 sets",
  },
  {
    name: "Moutain Climbers",
    category: "Abs",
    date: "10 July, 2020",
    durationSets: "10 mins",
  },
  {
    name: "Burpees",
    category: "Cardio",
    date: "30 June, 2020",
    durationSets: "2 mins",
  },
  {
    name: "Flutter kicks",
    category: "Abs",
    date: "17 July, 2020",
    durationSets: "3 mins",
  },
  {
    name: "Plank",
    category: "Abs",
    date: "16 July, 2020",
    durationSets: "10 mins",
  },
];

const RecentWorkouts = () => (
  <RecentWorkoutWrapper>
    <div className="heading">
      <p>Name</p>
      <p>Category</p>
      <p>Date</p>
      <p>Duration/Sets</p>
    </div>
    {recentWorkouts.map((workout, index) => (
      <StyledRecentWorkout key={index}>
        <p className="name">{workout.name}</p>
        <p className="category">{workout.category}</p>
        <p className="date">{workout.date}</p>
        <p className="duration">{workout.durationSets}</p>
      </StyledRecentWorkout>
    ))}
  </RecentWorkoutWrapper>
);

export default RecentWorkouts;
