import { useHistory } from "react-router-dom";

import Header from "../../../Header";
import Heading from "../../../Heading";
import Button from "../../../Button";
import classNames from "classnames";

import { ReactComponent as SettingsIcon } from "../../../../assets/images/svg/settings.svg";
import { ReactComponent as ConfigurationImage } from "../../../../assets/images/svg/configuration.svg";

import "./index.css";

const StartScreen = () => {
  const history = useHistory();

  return (
    <>
      <Header>
        <Heading type="h1" color="c-blue-grey">
          School CI server
        </Heading>
        <Button type="control" size="sm" onClick={goToSettings}>
          <SettingsIcon />
          <span className="desktop-only ml-5">Settings</span>
        </Button>
      </Header>
      <div className="grid-centred">
        <div className="configure-content">
          <ConfigurationImage />
          <p className={classNames("ta-center", "mt-32")}>
            Configure repository connection
            <br />
            and synchronization settings
          </p>
          <Button
            type="action"
            size="md"
            onClick={goToSettings}
            className="mt-24"
          >
            Open Settings
          </Button>
        </div>
      </div>
    </>
  );

  function goToSettings() {
    history.push("/settings");
  }
};

export default StartScreen;