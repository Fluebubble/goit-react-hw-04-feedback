import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: #4aa8ff;
  color: white;
  font-size: 20px;
  border: 0px solid white;
  padding: 15px;
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonBox>
      {options.map(option => {
        return (
          <Button key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        );
      })}
    </ButtonBox>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
