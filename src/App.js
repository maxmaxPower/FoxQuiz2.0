/* eslint-disable react/jsx-no-comment-textnodes */
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import NewsContainer from "./components/News/NewsPageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import React, { Suspense, useState } from "react";
import { compose } from "redux";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/app-reduces";
import Preloader from "./components/common/preloader/preloader";
import store from "./redux/redux-store";
import { useEffect } from "react";
import ContactUs from "./components/ContactUs/ContactUs";
import Recall from "./components/Recall/Recall";
import PremiumStatusPageContainer from "./components/PremiumStatus/PremiumStatusPageContainer";
const DialogsContainerLazy = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainerLazy = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const LoginContainerLazy = React.lazy(() =>
  import("./components/Login/LoginContainer")
);
const UsersContainerLazy = React.lazy(() =>
  import("./components/Users/UsersContainer")
);

const App = (props) => {
  let [call, setCall] = useState(false);

  let [themeColor,setThemeColor] = useState(false);

  useEffect(() => {
    props.initializeApp();
  });

  return (
    <Suspense fallback={
        <div>
          <Preloader />
        </div>
      }
    >
        <div className= {themeColor ? "darkTheme" : "whiteTheme"}>

      {call && <ContactUs call = {call} setCall = {setCall}/>}
      <div className="app-wrapper">
        <HeaderContainer TopIconColor={themeColor} />
        <NavbarContainer themeColor = {themeColor} setThemeColor = {setThemeColor}/>
        <div className="app-wrapper-content">
          <Routes>
            {" "}
            // Компонента вертає JSX розмєтку
            <Route path="/dialogs" element={<DialogsContainerLazy />} /> // Роут
            це компонента яка слідить за урлом і якшо совпадає, визиває мєтод
            рендер для нашої комноненти
            <Route path="/profile" element={<ProfileContainerLazy />} />
            <Route path="/login" element={<LoginContainerLazy />} />
            <Route path="/profile/:userId" element={<ProfileContainerLazy />} />
            <Route path="/users" element={<UsersContainerLazy />} />
            <Route path="/news" element={<NewsContainer />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/music" element={<Music />} />
            <Route path="/premiumStatus" element={<PremiumStatusPageContainer />} />
          </Routes>
        </div>
      </div>
      <Recall setCall={setCall} call={call}/>
      </div>
    </Suspense>
  );
};


const mapStateToProps = (state) => {
  return {
    initialized: state.app.initializied,
  };
};

let AppContainer = compose(connect(mapStateToProps, { initializeApp }))(App);

const SocialApp = (props) => {
  return (
    <HashRouter>
      <React.Suspense>
        <Provider store={store}>
        <AppContainer />
        </Provider>
      </React.Suspense>
    </HashRouter>
  );
};

export default SocialApp;
