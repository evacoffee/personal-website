import React from 'react';
import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MiffyScene } from '@/components/MiffyScene';

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(45_50%_95%)] to-[hsl(210_40%_96%)]">
      <MiffyScene />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
