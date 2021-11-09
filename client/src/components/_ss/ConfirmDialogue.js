import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

function ConfirmDialogue() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Button color="danger" onClick={() => setModal(!modal)}>
        Click Me
      </Button>

      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader
          close={
            <button className="close" onClick={() => setModal(!modal)}>
              ×
            </button>
          }
          toggle={function noRefCheck() {}}
        >
          Modal title
        </ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={function noRefCheck() {}}>
            Do Something
          </Button>{" "}
          <Button onClick={() => setModal(!modal)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ConfirmDialogue;
