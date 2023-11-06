import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import BooksModal from "../../common/BooksModal/BooksModal";
import Form from "react-bootstrap/Form";
import "./style.css";
import {
  useAddBooksMutation,
  useGetAllBooksQuery,
} from "../../../features/api/apiSlice";

export default function AddBooksModal({ show, setShow, update }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [year, setYear] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");

  const { isFetching } = useGetAllBooksQuery();
  const [addBooks] = useAddBooksMutation();

  const addBooksSubmit = async (event) => {
    event.preventDefault();

    const data = {
      title: title,
      author: author,
      isbn: isbn,
      year: year,
      quantity: qty,
      price: price,
    };
    await addBooks(data);
  };

  return (
    <div>
      <BooksModal
        show={show}
        setShow={setShow}
        title={!update ? "Add Books" : "Update Books"}
      >
        <Form
          onSubmit={(event) => {
            addBooksSubmit(event);
          }}
        >
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
          <Form.Group className="mb-3" controlId="Form.ControlInput2">
            <Form.Label>Book Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="eg:- 50"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Form.ControlInput2">
            <Form.Label>Book Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="eg:- 1000.00"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Form.Group>
          <div className="addBookBtn">
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="primary" type="submit" disabled={isFetching}>
              {!update ? "Add" : "Update"}
            </Button>
          </div>
        </Form>
      </BooksModal>
    </div>
  );
}
