import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import authReducer from "./auth-reducer";
  import navbarreducer from "./navbar-reducer";
import newsReducer from "./news-reducer";
import profileReducer from "./profile-reducer";
import sidebarreducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import dialogsReducer from "./dialogs-reducer";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reduces";
import premiumStatusReducer from "./premiumStatus-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messegesPage: dialogsReducer,
  sidebar: sidebarreducer,
  navbar: navbarreducer,
  usersPage: usersReducer,
  newsPage: newsReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  premiumStatus:premiumStatusReducer,
  
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;
