import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../Redux/Slice/AdminSlice";
import "./AdminProduct.scss";

const AdminProduct = () => {
  const dispatch = useDispatch();
  const allProduct = useSelector((state) => state?.admin?.productData);
  console.log(333, allProduct);
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  function deleteProduct(e) {
    dispatch();
  }
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
              <tr>
                <td>{++i}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>@mdo</td>
                <td>
                  <img src={item.image} width={100} height={100} />
                </td>
                <td>
                  <div className="mt-4">
                    <Button onClick={deleteProduct} className="btn btn-danger">
                      Delete
                    </Button>{" "}
                    &nbsp;
                    <Button className="btn btn-warning">Update</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminProduct;
