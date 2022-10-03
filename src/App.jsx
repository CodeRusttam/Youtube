import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomeScreen from "./Components/screens/HomeScreen/HomeScreen";
import WatchScreen from "./Components/screens/WatchScreen/WatchScreen";
import "./_app.scss";
import { useState } from "react";
import LoginScreen from "./Components/screens/LoginScreen/LoginScreen";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import SearchScreen from "./Components/screens/SearchScreen/SearchScreen";
import SubscriptionsScreen from "./Components/screens/SubscriptionsScreen/SubscriptionsScreen";
import ChannelScreen from "./Components/screens/ChannelScreen/ChannelScreen";
const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/auth");
    }
  }, [accessToken, loading]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Layout>
              <HomeScreen />
            </Layout>
          </>
        }
      />
      <Route path="/auth" element={<LoginScreen />} />
      <Route
        path="/search/:query"
        element={
          <Layout>
            <SearchScreen />
          </Layout>
        }
      />
      <Route element={<Navigate replace to="/" />} />
      <Route
        path="/watch/:id"
        element={
          <>
            <Layout>
              <WatchScreen />
            </Layout>
          </>
        }
      />
      <Route
        path="/feed/subscriptions"
        element={
          <>
            <Layout><SubscriptionsScreen /></Layout>
          </>
        }
      />
      <Route
        path="/channel/:channelId"
        element={
          <>
            <Layout>
               <ChannelScreen />
            </Layout>
          </>
        }
      />
    </Routes>
  );
};

export default App;
