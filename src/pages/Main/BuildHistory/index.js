import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../../components/Header";
import Heading from "../../../components/Heading";
import Button from "../../../components//Button";
import ButtonGroup from "../../../components//ButtonGroup";
import BuildCard from "./BuildCard";
import RunBuildModal from "./RunBuildModal";
import Context from "../../../components/Context";

import { ReactComponent as SettingsIcon } from "../../../assets/images/svg/settings.svg";
import { ReactComponent as RunIcon } from "../../../assets/images/svg/run.svg";

import "./index.css";

import buildHistoryMock from "../../../mocks/json/buildHistoryMock.json";

const BuildHistory = () => {
  const history = useHistory();

  const { state } = useContext(Context);

  const [isNewBuildOpen, setNewBuildOpen] = useState(false);

  const goToSettings = () => {
    history.push("/settings");
  }

  const openNewBuildModal = () => {
    setNewBuildOpen(true);
  }

  const closeNewBuildModal = () => {
    setNewBuildOpen(false);
  }

  return (
    <>
      <Header>
        <Heading type="heading1" color="c-black" className="break-word">
          {state.repoName}
        </Heading>
        <ButtonGroup>
          <Button type="control" size="sm" onClick={openNewBuildModal}>
            <RunIcon />
            <span className="desktop-only ml-5">Run build</span>
          </Button>
          <Button type="control" size="sm" onClick={goToSettings}>
            <SettingsIcon />
          </Button>
        </ButtonGroup>
      </Header>
      <div className="build-history-content">
        <div className="build-history-cards">
          {buildHistoryMock.map((build) => {
            return <BuildCard {...build} key={build.id} />;
          })}
        </div>
        <div>
          <Button type="control" size="sm" stretch="fluid" className="mt-8">
            Show more
          </Button>
        </div>
      </div>
      {isNewBuildOpen && <RunBuildModal onClose={closeNewBuildModal} />}
    </>
  );
};

export default BuildHistory;
