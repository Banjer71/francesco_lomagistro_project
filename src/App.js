import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import Footer from "./components/footer/Footer";
import SideDrawer from "./components/navbar/togglemenu/SideDrawer";
import Backdrop from "./components/navbar/backnavbar/Backdrop";
import FL_Header from "./components/homepage_FL/FL_Header";
import FL_Sidebar_Info from "./components/homepage_FL/FL_Sidebar_Info";
import Projects_Header from "./components/projects/Projects_Header";
import Projects_Sidebar from "./components/projects/Projects_Sidebar";
import VideoSelected from "./components/video/VideoSelected";
import VideoList from "./components/video/VideoList";
import ScrollOnTop from "./ScrollOnTop";
import Book from "./components/book/book";

function App() {
  const [sideDrawerIsOpen, setSideDrawer] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

  const toggleClickHandler = () => {
    setSideDrawer(!sideDrawerIsOpen);
  };

  const backdropHandler = () => {
    setSideDrawer(false);
  };

  const handleClickOnItem = () => {
    setSideDrawer(false);
  };

  let backdrop;
  if (sideDrawerIsOpen) {
    backdrop = <Backdrop click={backdropHandler} />;
  }

  const handleVideoClick = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
  };

  return (
    <HashRouter>
      <ScrollOnTop />
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Francesco Lomagistro</title>
          <meta name="description" content="Francesco Lomagistro website" />
          <link rel="canonical" href="https://www.francescolomagistro.it/" />
        </Helmet>
        <div className="container">
          <SideDrawer
            show={sideDrawerIsOpen}
            handleClickOnItem={handleClickOnItem}
          />
          {backdrop}
          <NavBar
            toggleClickHandler={toggleClickHandler}
            logo="Francesco Lomagistro"
            home="home"
            projects="projects"
            video="video"
            book="book"
            handleClickOnItem={handleClickOnItem}
          />
          <Header>
            <Route path="/" exact component={FL_Header} />
            <Route path="/video">
              <VideoSelected selectedVideoUrl={selectedVideoUrl} />
            </Route>
            <Route path="/projects" exact component={Projects_Header} />
           
          </Header>
          <SideBar>
            <Route path="/" exact component={FL_Sidebar_Info} />
            <Route path="/projects" exact component={Projects_Sidebar} />
            <Route path="/book" exact component={Book} />
            <Route path="/video">
              <VideoList onVideoSelect={handleVideoClick} />
            </Route>
          </SideBar>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
