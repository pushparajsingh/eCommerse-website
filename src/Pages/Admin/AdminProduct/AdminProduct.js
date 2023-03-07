import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import TableNoRecordFound from "../../../Component/TableNoRecordFound/TableNoRecordFound";

import {
  getProduct,
  deleteProduct,
  updateProduct,
} from "../../../Redux/Slice/AdminSlice";
import "./AdminProduct.scss";

const AdminProduct = () => {
  const dispatch = useDispatch();
  const { allProduct, status, isLoading, error } = useSelector((state) => {
    return {
      allProduct: state?.admin?.productData,
      status: state?.admin?.message,
      isLoading: state?.admin?.loading,
      error: state?.admin?.error,
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
  }, [status]);

  const update = (id, item) => {
    setId(id);
    handleShow();
    setData(item);
  };

  const saveChanges = () => {
    handleClose();
    console.log("data", data);
    dispatch(updateProduct({ id: id, data: data }));
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addProduct = () => {};
  return (
    <div>
      <div className="box">
        <Button
          className="btn btn-warning Click-Me mt-2 mb-2"
          onClick={addProduct}
        >
          Add Product
        </Button>
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
            {!isLoading &&
              allProduct?.map((item, i) => (
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
                        onClick={() => update(item._id, item)}
                      >
                        Update
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}

            {!allProduct.length ||
              (isLoading && (
                <TableNoRecordFound colspan={6} loading={isLoading} />
              ))}
          </tbody>
        </Table>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={
              typeof data.image === "object"
                ? URL.createObjectURL(data.image)
                : data.image
            }
            width={100}
            height={100}
            style={{ borderRadius: "2rem", marginLeft: "40%" }}
          />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                name="title"
                value={data.title}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                name="description"
                value={data.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                name="price"
                value={data.price}
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
