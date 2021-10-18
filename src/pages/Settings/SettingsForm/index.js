import { useState, useContext, useEffect, useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";

import Form from "../../../components/Form";
import Button from "../../../components/Button";
import ButtonGroup from "../../../components/ButtonGroup";
import Input from "../../../components/Input";
import InputTime from "../../../components/InputTime";
import ErrorMessage from "../../../components/ErrorMessage";
import Context from "../../../components/Context";

import "./index.css"
import Loader from "../../../components/Loader";

export const SettingsForm = () => {

    const history = useHistory();

    const { state, dispatch } = useContext(Context);

    const currentInterval = useRef(null);

    const [repoName, setRepoName] = useState(state.repoName);
    const [build, setBuild] = useState(state.build);
    const [branch, setBranch] = useState(state.branch);
    const [period, setPeriod] = useState(state.period);

    const isFetching = state.isFetching
    const isSaveDisabled = isFetching || !repoName || !build;

    const goToHome = useCallback(() => {
        history.push("/");
    }, [history])

    const onSave = () => {
        dispatch({
            type: "setFetching",
            payload: true,
        });
    }

    const onSaveCallback = useCallback(() => {
        dispatch({
            type: "setFetching",
            payload: false,
        });

        if (window.imitateSettingsError) {
            dispatch({
                type: "setError",
                payload: {
                    isError: true,
                    errorMessage: "Error occuried. Please, try again.",
                },
            });

            return;
        }

        dispatch({
            type: "setSettings",
            payload: {
                repoName,
                build,
                branch,
                period,
            },
        });

        if (state.isError) {
            dispatch({
                type: "setError",
                payload: {
                    isError: false,
                    errorMessage: "",
                },
            });
        }

        goToHome();
    }, [branch, dispatch, build, goToHome, period, repoName, state.isError])

    useEffect(() => {
        return () => {
            clearInterval(currentInterval.current);
            if (state.isFetching) {
                dispatch({
                    type: "setFetching",
                    payload: false,
                });
            }
        };
    }, [state.isFetching, dispatch]);

    useEffect(() => {
        if (isFetching) {
            currentInterval.current = setTimeout(onSaveCallback, 2000);
        }
    }, [isFetching, onSaveCallback])


    return (
        <Loader isLoading={isFetching}>
            <Form>
                <Form.Body>
                    <Input
                        id="repoName"
                        label="GitHub repository"
                        required
                        placeholder="user-name/repo-name"
                        value={repoName}
                        onChange={setRepoName}
                        autofocus
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
                </Form.Body>
                <Form.Buttons>
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
                            disabled={isFetching}
                        >
                            Cancel
                        </Button>
                    </ButtonGroup>
                </Form.Buttons>
            </Form>
        </Loader>
    )
}
