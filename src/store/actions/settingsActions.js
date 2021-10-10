import { setSettingsFetching, setSettingsError, setSettings } from "../types";
import { getHistoryItems } from "./buildsActions";

export const setFetching = (value) => {
  return {
    type: setSettingsFetching,
    payload: value,
  };
};

export const setError = (value) => {
  return {
    type: setSettingsError,
    payload: value,
  };
};

export const setSettingsValue = (value) => {
  return {
    type: setSettings,
    payload: value,
  };
};

export const onSaveSettings = (value, onSuccess) => (dispatch, getState) => {
  dispatch(setFetching(true));
  setTimeout(() => {
    dispatch(setFetching(false));
    if (window.imitateSettingsError) {
      dispatch(
        setError({
          isError: true,
          errorMessage: "Error occuried. Please, try again.",
        })
      );

      return;
    }

    dispatch(setSettingsValue(value));

    if (getState().settings.isError) {
      dispatch(
        setError({
          isError: false,
          errorMessage: "",
        })
      );
    }

    dispatch(getHistoryItems(false))

    if (onSuccess) {
      onSuccess();
    }
  }, 2500);
};
