import React from 'react';
import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ImageCoverScene } from '@/components/ImageCoverScene';

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <ImageCoverScene />
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
