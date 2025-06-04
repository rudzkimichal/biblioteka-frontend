import React from 'react';
import './App.css';
import { Container } from '@mui/material';
import { ItemsList } from './components/ItemsList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Container className="App">
                <ItemsList />
            </Container>
        </QueryClientProvider>
    );
}

export default App;
