import { useContext } from "react";

import BuildHistory from "./BuildHistory";
import StartScreen from "./StartScreen";
import Context from "../../components/Context";

const Main = () => {
  const { state } = useContext(Context);

  return state.repoName ? <BuildHistory /> : <StartScreen />;
};

export default Main;
