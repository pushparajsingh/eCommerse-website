import React from "react";
import "./CartProduct.scss";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

const CartProduct = () => {
  return (
    <>
      <div className="cartProduct-Position">
        <h2 align="center">Cart Product</h2>
        <Row>
          <Col xs={9}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>item</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <Button variant="warning">Buy Now</Button>&nbsp;
                    <Button variant="secondary">Delete</Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>sdfsdfdsf</td>
                  <td>
                    <Button variant="warning">Buy Now</Button>&nbsp;
                    <Button variant="secondary">Delete</Button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>dsfdsfdsf</td>
                  <td>
                    <Button variant="warning">Buy Now</Button>&nbsp;
                    <Button variant="secondary">Delete</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <h1>Shoping Cart</h1>
                </Card.Title>
                <Card.Text>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <td colSpan={2}>
                          <h5>Price Details</h5>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Price</td>
                        <td>Didf</td>
                      </tr>
                      <tr>
                        <td>Discount</td>
                        <td>Thornton</td>
                      </tr>
                      <tr>
                        <td>Delivery Charges</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          You will save &#8377;100 on this order
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <b>Total Amount</b> = 10,000
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Text>
                <Button variant="warning" className="btnCenter">
                  Process To Buy
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CartProduct;
