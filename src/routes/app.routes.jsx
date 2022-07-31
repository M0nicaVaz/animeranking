import { Routes, Route } from 'react-router-dom';

import { New } from '../pages/New';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Profile } from '../pages/Profile';
import { Explore } from '../pages/Explore';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/new/:slug" element={<New />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  );
}
