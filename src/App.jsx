import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { MatchDetails } from "./pages/MatchDetails";
import { Live } from "./pages/Live";
import { Home } from "./pages/Home";
import { Analytics } from "./pages/Analytics";
import { Players } from "./pages/Players";
import { Simulator } from "./pages/Simulator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="live" element={<Live />} />
          <Route path="match/:id" element={<MatchDetails />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="players" element={<Players />} />
          <Route path="simulator" element={<Simulator />} />
          <Route path="leagues" element={<div className="p-10 text-center text-primary font-bold">Leagues Coming Soon</div>} />
          <Route path="*" element={<div className="p-10 text-center text-primary font-bold">404 - Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
