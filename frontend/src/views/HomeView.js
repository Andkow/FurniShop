import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { listItems } from "../events/itemEvents.js";
import { useParams } from "react-router-dom";

const HomeView = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();

  const itemList = useSelector((state) => state.itemList);
  const { loading, error, products } = itemList;

  useEffect(() => {
    dispatch(listItems(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <Meta />
      <h2 className="text-center">
        <strong>Top Products</strong>
      </h2>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      <h2 className="text-center mt-2">
        <strong>Latest Products</strong>
      </h2>
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
