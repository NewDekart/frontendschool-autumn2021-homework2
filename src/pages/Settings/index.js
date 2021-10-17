import classNames from "classnames";

import Header from "../../components/Header";
import Heading from "../../components/Heading";

import "./index.css";
import { SettingsForm } from "./SettingsForm";

const Settings = () => {

  return (
    <>
      <Header>
        <Heading type="heading1" color="c-blue-grey">
          School CI server
        </Heading>
      </Header>
      <div>
        <Heading type="heading2">Settings</Heading>
        <p className={classNames("settings-info", "c-blue-grey", "mt-8")}>
          Configure repository connection and synchronization settings.
        </p>
        <SettingsForm />
      </div>
    </>
  );
};

export default Settings;
