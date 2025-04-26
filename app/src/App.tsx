import React from 'react';
import './App.css';
import { Container } from '@mui/material';
import { ItemsList } from './components/ItemsList';

function App() {
  return (
    <Container className="App">
      <ItemsList />
    </Container>
  );
}

export default App;
