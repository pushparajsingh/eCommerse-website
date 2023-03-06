import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";

import {
  getProduct,
  deleteProduct,
  updateProduct,
} from "../../../Redux/Slice/AdminSlice";
import "./AdminProduct.scss";

const AdminProduct = () => {
  const dispatch = useDispatch();
  const { allProduct } = useSelector((state) => {
    return {
      allProduct: state?.admin?.productData,
    };
  });
  const [show, setShow] = useState(false);
  const [id, setId] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const update = (id) => {
    setId(id);
    handleShow();
  };

  const saveChanges = () => {
    handleClose();
    console.log("data", data);
    dispatch(updateProduct({ id: id, data: data }));
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="box">
        <Table striped="columns">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>description</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {allProduct?.map((item, i) => (
              <tr key={i}>
                <td>{++i}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td className="word-wrap text-break">{item.description}</td>
                <td>
                  <img src={item.image} width={100} height={100} />
                </td>
                <td>
                  <div className="mt-4">
                    <Button
                      onClick={() => dispatch(deleteProduct(item._id))}
                      className="btn btn-danger"
                    >
                      Delete
                    </Button>
                    &nbsp;
                    <Button
                      className="btn btn-warning"
                      onClick={() => update(item._id)}
                    >
                      Update
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                name="title"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                name="description"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                name="price"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Select Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={(e) =>
                  setData({
                    ...data,
                    [e.target.name]: e.target.files[0],
                  })
                }
                accept="image/png, image/jpeg, image/jpg"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminProduct;
