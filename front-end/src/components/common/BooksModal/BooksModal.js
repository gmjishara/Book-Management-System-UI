import React from "react";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";

export default function BooksModal({ show, setShow, title, children }) {
  const handleClose = () => {
    Swal.fire({
      title: "Do you want to leave without changes?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        setShow(false);
      }
    });
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
