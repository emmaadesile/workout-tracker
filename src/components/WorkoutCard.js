import React from "react";
import styled from "styled-components";
import { colors } from "../styles/theme";

const WorkoutCardWrapper = styled.div`
  display: flex;

  & * {
    margin-right: 2rem;
  }
`;

const StyledCard = styled.div`
  display: flex;
  height: 60px;
  /* border: 1px solid ${colors.primaryColor}; */
  width: 170px;
  border-radius: 10px;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background: ${colors.white};

  &:hover {
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);
    transform: translateY(-0.2rem);  
  }

  p {
    font-weight: bold;
    color: ${colors.primaryColor};
  }

  div {
    width: 40px;
    height: 40px;
  }
`;

const WorkoutCard = ({ children }) => <StyledCard>{children}</StyledCard>;

export { WorkoutCard, WorkoutCardWrapper };
