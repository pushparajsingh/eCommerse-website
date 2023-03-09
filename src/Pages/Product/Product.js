import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../Component/Sidebar";
import { getEcommerseProduct, addItem } from "../../Redux/Slice/UserSlice";
import { Button, Card } from "react-bootstrap";
import { addCart } from "../../Redux/Slice/UserSlice";
import Quantity from "../../Component/Quantity/Quantity";

const Product = () => {
  const dispatch = useDispatch();
  const getData = useSelector((state) => state?.users?.allUserProduct);
  // const [quantityData, setQuantity] = useState();
  useEffect(() => {
    dispatch(getEcommerseProduct());
  }, []);

  // const Add_To_Cart = () => {
  //   dispatch(addItem(quantityData));
  // };

  // const quantityProduct = useCallback((Quantity, id) => {
  //   setQuantity({ Quantity, id });
  // }, []);
  // console.log(666, quantityData);
  return (
    <>
      <Sidebar />
      <div className="float-end content ">
        {getData?.map((item) => (
          <div key={item._id}>
            <Card className="cardSize">
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
                  <span>
                    <b>Description:</b>
                  </span>
                  <p className="text-nowrap overflow-hidden">
                    &nbsp;&nbsp;{item.description}
                  </p>
                  <Quantity ids={item._id} />
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
