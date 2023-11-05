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
          <h5>Book Name: <span>{item.title}</span></h5>
          <h5>Author: <span>{item.author}</span></h5>
          <h5>ISBN: <span>{item.isbn}</span></h5>
          <h5>Published Year: <span>{item.year}</span></h5>
          <h5>Quantity: <span>{item.quantity}</span></h5>
          <h5>Price: <span>{item.price}</span></h5>
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
