import { Routes, Route, Navigate } from "react-router-dom";

import { NewNote } from "../pages/NewNote";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewNote />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
