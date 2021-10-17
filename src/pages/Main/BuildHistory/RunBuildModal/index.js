import { useState } from "react";

import Input from "../../../../components/Input";
import Modal from "../../../../components/Modal";
import Button from "../../../../components/Button";
import ButtonGroup from "../../../../components/ButtonGroup";
import Form from "../../../../components/Form";

import "./index.css";

const RunBuildModal = ({ onClose }) => {
  const [commit, setCommit] = useState("");

  return (
    <Modal onClose={onClose}>
      <div className="run-build-modal">
        <p className="run-build-header">New build</p>
        <Form buttons={getButtons()}>
          <Input
            id="commit"
            value={commit}
            onChange={setCommit}
            placeholder="Commit hash"
            label="Enter the commit hash which you want to build."
          />
        </Form>
      </div>
    </Modal>
  );

  function getButtons() {
    return (
      <ButtonGroup stretch="fluid">
        <Button size="md" type="action" onClick={onClose} stretch="fluid">
          Run build
        </Button>
        <Button size="md" type="control" onClick={onClose} stretch="fluid">
          Cancel
        </Button>
      </ButtonGroup>
    );
  }
};

export default RunBuildModal;
