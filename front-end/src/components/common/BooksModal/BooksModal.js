import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function BooksModal({ show, setShow, title, children }) {
  const handleClose = () => {
    setShow(false);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
