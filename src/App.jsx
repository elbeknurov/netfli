import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Popular from "./components/popular/popular";
import Izlemeye from "./components/izlemeye/izlemeye";
import Post from "./components/post2/post";
import Post3 from "./components/post3/post3";

function App() {
  return (
    <React.StrictMode>
      <Header />
      <Popular />
      <Izlemeye />
      <Post />
      <Post3 />
      <Footer />
    </React.StrictMode>
  );
}

export default App;
