import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
let initialState = {
  initializied: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initializied: true,
      };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch) => {
  dispatch(getAuthUserData()).then(() => {
    dispatch(initializedSuccess()); // ПОМІНЯВ ЦЕ , В СЛУЧАЇ НЕСПРАВНОСТІ ФІКС
  });
};

export default appReducer;
