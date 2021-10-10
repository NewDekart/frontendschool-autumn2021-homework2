import { useSelector } from "react-redux";
import { getRepoName } from "../../../store/selectors/settingsSelectors";

import BuildHistory from "./BuildHistory";
import StartScreen from "./StartScreen";

const Main = () => {
  const repoName = useSelector(getRepoName);

  return repoName ? <BuildHistory /> : <StartScreen />;
};

export default Main;
