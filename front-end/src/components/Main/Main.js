import React, { useState } from "react";
import "./style.css";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ReactComponent as PlusIcon } from "../../assets/icons/add.svg";
import { ReactComponent as ViewIcon } from "../../assets/icons/eye.svg";
import AddBooksModal from "../BooksModal/AddBooksModal/AddBooksModal";
import ViewBooksModal from "../BooksModal/ViewBooksModal/ViewBooksModal";
import {
  useDeleteBooksMutation,
  useGetAllBooksQuery,
} from "../../features/api/apiSlice";
import Swal from "sweetalert2";

export default function Main() {
  const { data } = useGetAllBooksQuery("");
  const [deleteBooks] = useDeleteBooksMutation();

  const [showAdd, setShowAdd] = useState(false);
  const [showView, setShowView] = useState(false);
  const [update, setUpdate] = useState(false);
  const [item, setItem] = useState("");

  const addBookControl = () => {
    setShowAdd(true);
    setUpdate(false);
  };

  const updateBookControl = (item) => {
    setItem(item);
    setShowAdd(true);
    setUpdate(true);
  };

  return (
    <div className="mainDiv">
      <div className="addBooks">
        <Button variant="primary" onClick={addBookControl}>
          Add Books
          <PlusIcon width={21} height={21} style={{ marginLeft: "10px" }} />
        </Button>
      </div>
      <div className="bookTableContainer">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Publication Year</th>
            </tr>
          </thead>
          <tbody className="tableBody">
            {data?.map((item) => (
              <tr key={item.userId}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.isbn}</td>
                <td>{item.year}</td>

                <td>
                  <ViewIcon
                    width={25}
                    height={25}
                    onClick={() => {
                      setItem(item);
                      setShowView(true);
                    }}
                  />
                </td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => {
                      updateBookControl(item);
                    }}
                  >
                    Update
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                      }).then((result) => {
                        if (result.isConfirmed) {
                          deleteBooks(item.id);
                          Swal.fire({
                            position: "top",
                            title: "Deleted!",
                            text: "Your book has been deleted.",
                            icon: "success",
                            timer: 1500,
                          });
                        }
                      });
                      
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {showAdd && (
        <AddBooksModal
          show={showAdd}
          setShow={setShowAdd}
          update={update}
          item={item}
        />
      )}

      {showView && (
        <ViewBooksModal
          show={showView}
          setShow={setShowView}
          update={update}
          item={item}
        />
      )}
    </div>
  );
}
