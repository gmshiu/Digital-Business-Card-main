import React from "react";
import ReactDOM from "react-dom";
import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";
import "./App.css"

export default function App() {
    return (
        <div className="App">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));


