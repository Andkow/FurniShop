import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listItems } from "../events/itemEvents.js";
import { useParams } from "react-router-dom";

const HomeView = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams()

  const itemList = useSelector((state) => state.itemList);
  const { loading, error, products } = itemList;

  useEffect(() => {
    dispatch(listItems(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <h1 className="text-center">
        <strong>Latest Products</strong>
      </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"}>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col
              className="align-items-stretch d-flex"
              key={product._id}
              sm={12}
              md={6}
              lg={4}
              xl={3}
            >
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};
export default HomeView;
