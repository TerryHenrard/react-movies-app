import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from './routes/Home.jsx';
import { Favorites } from './routes/Favorites.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NotFound } from './components/NotFound.jsx';

const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/favorites'} element={<Favorites />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
