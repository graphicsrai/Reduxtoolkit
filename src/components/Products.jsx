import React, { useEffect, useState } from "react";
import { CardText } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/CartSlice";
import { productsFetch } from "../store/productSlice";
import store from "../store/store";
import DataNotFound from "./Datanotfound";
import Loading from "./Loadding";

export default function Products() {
  const dispatch = useDispatch();

  const { data: items, status } = useSelector((state) => state.products);

  useEffect(() => {
    store.dispatch(productsFetch());
  }, []);

  const addToCart = (item) => {
    dispatch(add(item));
  };

  const cards = items.map((item) => {
    return (
      <div className="col-md-3 mb-2">
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
            <Button variant="primary" onClick={() => addToCart(item)}>
              Add to Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  if (status === "rejected") {
    return <DataNotFound />;
  }
  if (status === "pending") {
    return <Loading />;
  }

  return (
    <>
      <div className="container">
        <>
          <h2>products</h2>
          <div className="row">{cards}</div>
        </>
      </div>
    </>
  );
}
