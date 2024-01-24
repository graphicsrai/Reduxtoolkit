import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CardText } from "react-bootstrap";
import { remove } from "../store/CartSlice";
import Popup from "./Popup";

export default function Cart() {
  const {
    cartItem: products,
    itemCount,
    mgsColor,
  } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeCart = (id) => {
    dispatch(remove(id));
  };

  const cards = products.map((item) => {
    return (
      <div className="col-md-12 mb-2">
        <Card key={item.id} className="h-100">
          <div>
            <Card.Img
              style={{ width: "100px", height: "130px", marginTop: "10px" }}
              variant="top"
              src={item.image}
            />
          </div>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <CardText>
              Rs.
              {item.price}
            </CardText>
          </Card.Body>
          <Card.Footer>
            <Button variant="danger" onClick={() => removeCart(item.id)}>
              Remove from Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <>
      {itemCount > 0 ? (
        <>
          <Popup msg={"Go to payment"} bgColor={mgsColor} />
          <div>{cards}</div>
        </>
      ) : (
        <Popup msg={"Cart is empty"} bgColor={mgsColor} />
      )}
    </>
  );
}
