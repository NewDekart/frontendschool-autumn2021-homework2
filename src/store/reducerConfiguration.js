export const initialState = {
  isFetching: false,
  repoName: "",
  build: "",
  branch: "",
  period: "",
  isError: false,
  errorMessage: "",
};

export function reducer(state, action) {
  switch (action.type) {
    case "setFetching": {
      return {
        ...state,
        isFetching: action.payload,
      };
    }
    case "setError": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "setSettings": {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
}
