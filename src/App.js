import React from 'react';
import { Web3Provider } from './contexts/Web3Context';
import styled from 'styled-components';

import ChatBox from './components/ChatBox';
import MessageForm from './components/MessageForm';

// Styled Components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #121212;  /* Black background */
  font-family: 'Roboto', sans-serif;
  padding: 20px;
  color: #fff;  /* White text */
  text-align: center;
`;

const Header = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.05);  /* Slight transparent background */
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
`;

const Button = styled.button`
  padding: 12px 20px;
  margin: 10px 0;
  background-color: #444; /* Dark grey background */
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #888;  /* Lighter grey */
    transform: translateY(-3px); /* Slight lift effect */
  }

  &:active {
    background-color: #222; /* Darker grey when pressed */
    transform: translateY(1px); /* Slight press effect */
  }

  &:focus {
    outline: none;
  }
`;

const App = () => {
  return (
    <Web3Provider>
      <AppContainer>
        <Header>Decentralized Chat</Header>
        <ContentWrapper>
          <ChatBox />
          <MessageForm />
          {/* Button to demonstrate the styled button */}
          <Button>Send Message</Button>
        </ContentWrapper>
      </AppContainer>
    </Web3Provider>
  );
};

export default App;
