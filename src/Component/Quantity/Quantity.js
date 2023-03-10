import React, { memo, useState } from "react";
import { Button } from "react-bootstrap";
import { BsPlusSquareFill } from "react-icons/bs";
import { AiFillMinusSquare } from "react-icons/ai";
import "./Quantity.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/Slice/UserSlice";

const Quantity = (props) => {
  const [productNumber, setProductNumber] = useState(0);
  const dispatch = useDispatch();

  return (
    <>
      <AiFillMinusSquare
        className="calculate display-6 user-select-none"
        onClick={() =>
          productNumber > 0 ? setProductNumber(productNumber - 1) : ""
        }
      />
      <span className="user-select-none">{productNumber}</span>
      <BsPlusSquareFill
        onClick={() => setProductNumber(productNumber + 1)}
        className="calculate user-select-none"
      />
      <Button
        variant="secondary"
        onClick={() => {
          dispatch(addItem({ quantity: productNumber, itemId: props.ids }));
          setProductNumber(0);
        }}
      >
        Add To Cart
      </Button>{" "}
      <Button variant="warning">Buy Now</Button>
    </>
  );
};

export default memo(Quantity);
