import { addBuildHistoryItems } from "../types";

import buildsMock from "../../mocks/json/buildHistoryMock.json";

export function getHistoryItems(full) {
  const items = full ? buildsMock.slice(10) : buildsMock.slice(0, 10);

  return {
    type: addBuildHistoryItems,
    payload: {
      items,
      full,
    },
  };
}
