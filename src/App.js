import Header from "./components/Header/Header.js";
import Navbar from "./components/Navbar/Navbar.js";
import Profile from "./components/Profile/Profile.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./reset.scss";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs.js";

function App(props) {
  // let usersItem = [
  //   { name: "Victor", id: 1 },
  //   { name: "Anna", id: "2" },
  //   { name: "Irina", id: "3" },
  //   { name: "Arina", id: "4" },
  // ];
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header />
        <div className="app-wrapper-content">
          <Navbar />

          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/dialogs"
              element={<Dialogs state={props.state.usersItem} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
