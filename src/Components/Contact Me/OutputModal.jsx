import React, { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
const OutputModal = ({ show, handleClose, error, loading }) => {
    
    

    return (
        <Fragment>
            <Modal
                id="out"
                data-bs-theme="dark"
                show={show}
                contentClassName={(() => {
                    return error === null ? "border-success" : "border-danger";
                })()}
                centered
            >
                <Modal.Header>
                    <Modal.Title>
                        {(() => {
                            return error === null ? "Success" : "Oops!!";
                        })()}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {(() => {
                            if (error === null) {
                                return `Thank you for getting in touch.\n
								I look forward to your comment!`;
                            }
                            return typeof error === "string"
                                ? error
                                : typeof error;
                        })()}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="info" onClick={handleClose}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default OutputModal;
