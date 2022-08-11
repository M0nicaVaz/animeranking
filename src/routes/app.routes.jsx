import { Route, Routes } from 'react-router-dom';

import { Details } from '../pages/Details';
import { Explore } from '../pages/Explore';
import { Home } from '../pages/Home';
import { New } from '../pages/New';
import { NotFound } from '../pages/NotFound';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/new/:slug" element={<New />} />
      <Route path="/edit/:id" element={<New />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
