import React from "react";
// import Navbar from "./components/Navbar/Navbar";
import Nav from "./components/Navbar/Navbar";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";

function App() {
    return (
        <div className="App">

            <Nav />
            <Sidebar />
            <Home />
        </div>
    );
}

export default App;
