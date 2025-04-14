import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '@/screens/Home';
import Chat from '@/screens/Chat';

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;