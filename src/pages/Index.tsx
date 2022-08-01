import { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";

const routes: Array<{ name: string; Component: Function }> = [
  { name: "/", Component: Home },
];

export default function Index(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ name, Component }) => (
          <Route path={name} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
