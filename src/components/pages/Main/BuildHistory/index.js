import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "../../../Header";
import Heading from "../../../Heading";
import Button from "../../../Button";
import ButtonGroup from "../../../ButtonGroup";
import BuildCard from "./BuildCard";
import RunBuildModal from "./RunBuildModal";

import { ReactComponent as SettingsIcon } from "../../../../assets/images/svg/settings.svg";
import { ReactComponent as RunIcon } from "../../../../assets/images/svg/run.svg";

import "./index.css";

import { getRepoName } from "../../../../store/selectors/settingsSelectors";
import { getBuildInfo } from "../../../../store/selectors/buildsSelectors";
import { getHistoryItems } from "../../../../store/actions/buildsActions";

const BuildHistory = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const repoName = useSelector(getRepoName);
  const { items, full } = useSelector(getBuildInfo);

  const [isNewBuildOpen, setNewBuildOpen] = useState(false);

  return (
    <>
      <Header>
        <Heading type="h1" color="c-black">
          {repoName}
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
          {items?.map((build) => {
            return <BuildCard {...build} key={build.id} />;
          })}
        </div>
        <div>
          {!full && (
            <Button
              type="control"
              size="sm"
              stretch="fluid"
              className="mt-8"
              onClick={showMore}
            >
              Show more
            </Button>
          )}
        </div>
      </div>
      {isNewBuildOpen && <RunBuildModal onClose={closeNewBuildModal} />}
    </>
  );

  function goToSettings() {
    history.push("/settings");
  }

  function openNewBuildModal() {
    setNewBuildOpen(true);
  }

  function closeNewBuildModal() {
    setNewBuildOpen(false);
  }

  function showMore() {
    dispatch(getHistoryItems(true));
  }
};

export default BuildHistory;
