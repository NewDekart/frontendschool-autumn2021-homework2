import { addBuildHistoryItems } from "../types";

const initialState = {
  items: [],
  full: false,
};

function historyReducer(state = initialState, action) {
  switch (action.type) {
    case addBuildHistoryItems: {
      const { full, items } = action.payload;

      return {
        items: full ? [...state.items, ...items] : items,
        full: full,
      };
    }

    default:
      return state;
  }
}

export default historyReducer;
