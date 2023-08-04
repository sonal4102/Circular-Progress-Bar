
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoMdPlay, IoMdPause } from 'react-icons/io'; 

const CircularProgressContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  width: 420px;
  padding: 50px 0;
  display: flex;
  row-gap: 30px;
  flex-direction: column;
  align-items: center;
`;

const CircularProgressWrapper = styled.div`
  position: relative;
  height: 250px;
  width: 250px;
  background: conic-gradient(
    rgb(194, 101, 34) ${(props) => props.progress * 3.6}deg,
    #bdbdbd 0deg
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    height: 210px;
    width: 210px;
    border-radius: 50%;
    background-color: #fff;
  }
`;

const ProgressValue = styled.span`
  position: relative;
  font-size: 40px;
  font-weight: 600;
  color: rgb(194, 101, 34);
`;

const Text = styled.span`
  font-size: 30px;
  font-weight: 500;
  color: #643843;
`;
const StartButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #218838;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;


const PauseButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #c82333;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
  & > button {
    margin-right: 10px;
  }
`;

const StartIcon = styled(IoMdPlay)`
  margin-right: 5px;
`;

const StopIcon = styled(IoMdPause)`
  margin-right: 5px;
`;
const CircularProgress = ({ startValue, endValue, speed, text }) => {
  const [progressValue, setProgressValue] = useState(startValue);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (running) {
      interval = setInterval(() => {
        setProgressValue((prevValue) => {
          if (prevValue < endValue) {
            return prevValue + 1;
          } else {
            clearInterval(interval);
            setRunning(false);
            return prevValue;
          }
        });
      }, speed);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running, endValue, speed]);

  const startTimer = () => {
    setRunning(true);
  };

  const stopTimer = () => {
    setRunning(false);
  };

  return (
 
    <CircularProgressContainer>
           <Text>{text}</Text>
      <CircularProgressWrapper progress={progressValue}>
        <ProgressValue>{progressValue}%</ProgressValue>
      </CircularProgressWrapper>
  
      <ButtonContainer>
      <StartButton onClick={startTimer}>
          <StartIcon />
          Start Timer
        </StartButton>
        <PauseButton onClick={stopTimer}>
          <StopIcon />
          Pause Timer
        </PauseButton>
      </ButtonContainer>
    </CircularProgressContainer>
  );
};

export default CircularProgress;