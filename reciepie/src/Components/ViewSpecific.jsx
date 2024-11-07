import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addReviewAPI, getSelectedApi, getSelectedFAVApi } from "../Service/allApi";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {  getReviewAPi } from "../Service/allApi";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";


function ViewSpecific() {

    const {id} = useParams()
    // console.log(id)

    const [slectedCenter,setSelecter] = useState([])

    const gettinDatas = async()=>{
        const result = await getSelectedApi(id)
      
         // console.log(result)
        setSelecter(result.data )

    }
    

    useEffect(()=>{
        gettinDatas()
    },[id])



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
          reqBody.append('recipieid',id)
          reqBody.append("username", username);
          reqBody.append("review", review);
          reqBody.append("rating", rating);
    
          const result = await addReviewAPI(reqBody);
          console.log(result)
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
    const result = await getReviewAPi(id);
    // console.log(result)
    setGetreview(result.data);
  };

  useEffect(() => {
    gettingReview();
  }, [getReiew]);


  return (
    <div>
      <div className="container ">
        <div className="container d-flex align-items-center justify-contetn-center flex-column mt-5">
          <h3 className="">{slectedCenter?.name?.toUpperCase()}</h3>

          <div>
            <h5>INCREDIENTS</h5>

            <p>
              {slectedCenter?.ingredient}
            </p>
          </div>

          <div>
            <h5>INSTRUCTION</h5>

            <p>
             {slectedCenter?.instruction}
            </p>
          </div>

          <div>
            <h5>COOKING TIME</h5>
            <p>
             {slectedCenter?.cooktime}
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-center mt-5">
        <button className="btn btn-success" onClick={handleShow}>ADD REVIEW</button>




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









  );
}

export default ViewSpecific;
