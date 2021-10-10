import { useState } from "react";
import classNames from "classnames";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../Header";
import Heading from "../../Heading";
import Form from "../../Form";
import Button from "../../Button";
import ButtonGroup from "../../ButtonGroup";
import Input from "../../Input";
import InputTime from "../../InputTime";
import ErrorMessage from "../../ErrorMessage";

import { onSaveSettings } from "../../../store/actions/settingsActions";
import { getSettings } from "../../../store/selectors/settingsSelectors";

import "./index.css";

const Settings = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const state = useSelector(getSettings);

  const [repoName, setRepoName] = useState(state.repoName);
  const [build, setBuild] = useState(state.build);
  const [branch, setBranch] = useState(state.branch);
  const [period, setPeriod] = useState(state.period);

  return (
    <>
      <Header>
        <Heading type="h1" color="c-blue-grey">
          School CI server
        </Heading>
      </Header>
      <div>
        <Heading type="h2">Settings</Heading>
        <p className={classNames("settings-info", "c-blue-grey", "mt-8")}>
          Configure repository connection and synchronization settings.
        </p>
        <Form buttons={getButtons()}>
          <Input
            id="repoName"
            label="GitHub repository"
            required
            placeholder="user-name/repo-name"
            value={repoName}
            onChange={setRepoName}
          />
          <Input
            id="build"
            label="Build command"
            required
            value={build}
            onChange={setBuild}
          />
          <Input
            id="branch"
            label="Main branch"
            value={branch}
            onChange={setBranch}
          />
          <div className="build-timer">
            <InputTime
              id="period"
              label="Synchronize every"
              width="3.625rem"
              textAlign="end"
              stretch="fluid"
              additionalComponent={
                <span className="c-blue-grey-600">minutes</span>
              }
              length={3}
              value={period}
              onChange={setPeriod}
              clear={false}
            />
          </div>
          {state.isError && <ErrorMessage>{state.errorMessage}</ErrorMessage>}
        </Form>
      </div>
    </>
  );

  function getButtons() {
    const isCancelDisabled = state.isFetching;
    const isSaveDisabled = isCancelDisabled || !repoName || !build;

    return (
      <ButtonGroup stretch="fluid">
        <Button
          size="md"
          type="action"
          onClick={onSave}
          stretch="fluid"
          disabled={isSaveDisabled}
        >
          Save
        </Button>
        <Button
          size="md"
          type="control"
          onClick={goToHome}
          stretch="fluid"
          disabled={isCancelDisabled}
        >
          Cancel
        </Button>
      </ButtonGroup>
    );
  }

  function onSave() {
    dispatch(
      onSaveSettings(
        {
          repoName,
          build,
          branch,
          period,
        },
        goToHome
      )
    );
  }

  function goToHome() {
    history.push("/");
  }
};

export default Settings;
