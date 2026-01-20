import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import './App.css'
import Login from "./forms/Login";
import Accounts from "./forms/Accounts";
import Sales from "./forms/Sales";
import Service from "./forms/Service";
import Marketing from "./forms/Marketing";
import Commerce from "./forms/Commerce";

const App = () => {
  return (
    <Routes>
      {/* Layout Route */}
      <Route path="/" element={<LandingPage />}>
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="sales" element={<Sales />} />
        <Route path="service" element={<Service />} />
        <Route path="marketing" element={<Marketing />} />
        <Route path="commerce" element={<Commerce />} />
      </Route>
    </Routes>
  );
};

export default App;
