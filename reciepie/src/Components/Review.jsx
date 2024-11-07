import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { addReviewAPI, getReviewAPi } from "../Service/allApi";
function Review() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addReview, setAddreview] = useState({
    username: "",
    review: "",
    rating: "",
  });

  const handelAdding = async () => {
    // console.log(addReview)
    const { username, review, rating } = addReview;
    if (!username || !review || !rating) {
      alert("please fill the form completely");
    } else {
      const reqBody = new FormData();
      reqBody.append("username", username);
      reqBody.append("review", review);
      reqBody.append("rating", rating);

      const result = await addReviewAPI(reqBody);
      // console.log(result)
      if (result.status === 201) {
        alert("review addded succsfully");
        setAddreview({
          username: "",
          review: "",
          rating: "",
        });
        handleClose();
      } else {
        alert("something went wrong");
      }
    }
  };

  const [getReiew, setGetreview] = useState([]);

  const gettingReview = async () => {
    const result = await getReviewAPi();
    // console.log(result)
    setGetreview(result.data);
  };

  useEffect(() => {
    gettingReview();
  }, []);
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center mt-5 flex-column">
        <button className="btn btn-primary" onClick={handleShow}>
          ADD REVIEW
        </button>

        <div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>ADD REVIEW</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <input
                  type="text"
                  placeholder="your name"
                  className="form-control"
                  value={addReview.username}
                  onChange={(e) =>
                    setAddreview({ ...addReview, username: e.target.value })
                  }
                />
                <textarea
                  name=""
                  placeholder="your review"
                  className="form-control mt-3"
                  id=""
                  value={addReview.review}
                  onChange={(e) =>
                    setAddreview({ ...addReview, review: e.target.value })
                  }
                ></textarea>
                <input
                  type="text"
                  placeholder="your rating "
                  className="form-control mt-3"
                  value={addReview.rating}
                  onChange={(e) =>
                    setAddreview({ ...addReview, rating: e.target.value })
                  }
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handelAdding}>
                ADD
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <div className="d-flex align-items-center justify-content-center mt-5">
          <Row>
            {getReiew?.length > 0 ? (
              getReiew?.map((item) => (
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>{item.username}</Card.Title>
                      <Card.Text>{item.review}</Card.Text>
                      <h2>
                        RATING:{" "}
                        <span className="text-success"> {item.rating}</span>
                      </h2>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <div>nothing to display</div>
            )}
          </Row>
        </div>
      </div>
    </>
  );
}

export default Review;
