import React from "react";
import BooksModal from "../../common/BooksModal/BooksModal";
import "./style.css";
import { Button } from "react-bootstrap";

export default function ViewBooksModal({ show, setShow, item}) {
  
  return (
    <div>
      <BooksModal
        show={show}
        setShow={setShow}
        title="View Books"
      >
        <div className="viewBook">
          <h5>Book Name:{item.title}</h5>
          <h5>Author:{item.body}</h5>
          <h5>ISBN:</h5>
          <h5>Published Year:</h5>
          <h5>Quantity:</h5>
          <h5>Price:</h5>
        </div>
        <div className="viewCloseBtn">
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </div>
      </BooksModal>
    </div>
  );
}
