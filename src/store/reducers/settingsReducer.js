import { setSettingsFetching, setSettingsError, setSettings } from "../types";

const initialState = {
  isFetching: false,
  repoName: "",
  build: "",
  branch: "",
  period: "",
  isError: false,
  errorMessage: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case setSettingsFetching: {
      return {
        ...state,
        isFetching: action.payload,
      };
    }
    case setSettingsError: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case setSettings: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
}

export default reducer;
