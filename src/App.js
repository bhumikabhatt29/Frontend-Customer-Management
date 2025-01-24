import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import Index from "./pages/IndexPage";
import Profile from "./pages/Profile";
import Customer from "./pages/Customer";
import Creators from "./pages/Creators";
import Viewers from "./pages/Viewers";
import CustomerButton from "./pages/CustomerButton";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route exact path="/" Component={HomePage} /> */}
        {/* <Route exact path="/index" Component={Index}/> */}
        <Route exact path="/" Component={Index}/>
        <Route path="/profile" Component={Profile } />
        {/* <Route path="/customer" Component={Customer } /> */}
        <Route path="/customer/:segmentId" element={<CustomerButton />} />
        <Route path="/creator" Component={Creators} />
        <Route path="/viewer" Component={Viewers } />
        <Route path="/customer" Component={Customer}/>
      </Routes>
    </div>
  );
}

export default App;
