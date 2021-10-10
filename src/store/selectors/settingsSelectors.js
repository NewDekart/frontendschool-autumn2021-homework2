import { createSelector } from "reselect";

export const getSettings = (state) => state.settings;

export const getRepoName = createSelector(
  getSettings,
  (value) => value.repoName
);
