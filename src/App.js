import React, { Suspense } from 'react';
import { BrowserRouter, Navigate , Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Navigate replace to="/photos" />} />

            <Route path="/photos/*" element={<Photo/>} />
            <Route element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;