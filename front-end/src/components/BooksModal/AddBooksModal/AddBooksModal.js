import React, { useState } from "react";
import { Button } from "react-bootstrap";
import BooksModal from "../../common/BooksModal/BooksModal";
import Form from "react-bootstrap/Form";
import "./style.css";

export default function AddBooksModal({ show, setShow, update }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [year, setYear] = useState("");

  return (
    <div>
      <BooksModal
        show={show}
        setShow={setShow}
        title={!update ? "Add Books" : "Update Books"}
      >
        <Form>
          <Form.Group className="mb-3" controlId="Form.ControlInput1">
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="eg:- Harry Potter"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Form.ControlInput2">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="eg:- J.K. Rowling"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Form.ControlInput2">
            <Form.Label>ISBN</Form.Label>
            <Form.Control
              type="text"
              placeholder="eg:- 978-0-13-449716-5"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Form.ControlInput2">
            <Form.Label>Published Year</Form.Label>
            <Form.Control
              type="text"
              placeholder="eg:- 1995"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </Form.Group>
          <div className="addBookBtn">
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              {!update?"Add":"Update"}
            </Button>
          </div>
        </Form>
      </BooksModal>
    </div>
  );
}
