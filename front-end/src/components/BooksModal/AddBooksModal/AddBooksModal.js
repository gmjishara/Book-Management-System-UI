import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import BooksModal from "../../common/BooksModal/BooksModal";
import Form from "react-bootstrap/Form";
import "./style.css";
import {
  useAddBooksMutation,
  useGetAllBooksQuery,
  useUpdateBooksMutation,
} from "../../../features/api/apiSlice";
import Swal from "sweetalert2";

export default function AddBooksModal({ show, setShow, update, item }) {
  const { isFetching } = useGetAllBooksQuery();
  const [addBooks] = useAddBooksMutation();
  const [updateBooks] = useUpdateBooksMutation();

  const [title, setTitle] = useState(update ? item.title : "");
  const [author, setAuthor] = useState(update ? item.author : "");
  const [isbn, setIsbn] = useState(update ? item.isbn : "");
  const [year, setYear] = useState(update ? item.year : "");
  const [qty, setQty] = useState(update ? item.quantity : "");
  const [price, setPrice] = useState(update ? item.price : "");

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

    if (update) {
      Swal.fire({
        title: "Do you want to Update this Book?",
        showCancelButton: true,
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          updateBooks({ id: item.id, body: data });
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Book has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
          setShow(false);
        }
      });
    } else {
      Swal.fire({
        title: "Do you want to Add Books?",
        showCancelButton: true,
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          addBooks(data);
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Book has been added",
            showConfirmButton: false,
            timer: 1500,
          });
          setShow(false);
        }
      });
    }
  };

  const closeButton=()=>{
    Swal.fire({
      title: "Do you want to leave without changes?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        setShow(false);
      }
    });
  }

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
            <Button variant="secondary" onClick={closeButton}>
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
