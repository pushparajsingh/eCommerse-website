import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../Component/Sidebar";
import { getEcommerseProduct } from "../../Redux/Slice/ECommerseSlice";
import { Button, Row, Col, Card } from "react-bootstrap";

const Product = () => {
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.allDataProduct.products);
  const [allProduct, setAllProduct] = useState([]);
  useEffect(() => {
    dispatch(getEcommerseProduct());
  }, [getData]);

  useEffect(() => {
    setAllProduct(getData);
  }, [getData]);

  console.log(333, allProduct);
  return (
    <>
      <Sidebar />
      <div className="float-end content ">
        {allProduct?.map((item) => (
          <div>
            <Card key={item._id} className="cardSize">
              <img
                src={item.image}
                title="Image"
                width={250}
                height={150}
                align="center"
                id="Center_Image"
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  <p>&#8377;{item.price}</p>
                  <p>
                    <b>Description:</b>
                    &nbsp;&nbsp;{item.description}
                  </p>
                  <Button variant="secondary">Add To Cart</Button>{" "}
                  <Button variant="warning">Buy Now</Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
