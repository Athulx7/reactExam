import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import GetRecipie from "./GetRecipie";
import Review from "./Review";
import { Link } from "react-router-dom";
import { addReceipieAPi } from "../Service/allApi";

function MainDash() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addReceipie,setAddReciepie] = useState({
    name:'',
    ingredient:'',
    instruction:'',
    cookTime:''
  })



  const addREcipie = async()=>{
    const {name,ingredient,instruction,cookTime} =  addReceipie
    if(!name || !ingredient || !instruction || !cookTime){
        alert("please fill the form completely")
    }
    else{
        const reqBody = new FormData()
        reqBody.append('name',name)
        reqBody.append('ingredient',ingredient)
        reqBody.append('instruction',instruction)
        reqBody.append('cooktime',cookTime)

        const result = await addReceipieAPi(reqBody)
       if(result.status === 201){
        alert("rescipie successfuly added")
        setAddReciepie({
            name:'',
            ingredient:'',
            instruction:'',
            cookTime:''
        })
        handleClose()
       }
       else{
        alert("something went erong")
       }
    }
  }


  return (
    <>
      <div className="container mt-5">
        <div className="container d-flex align-items-center justify-content-center flex-column ">
          <button className="btn btn-success w-50 fw-bold" onClick={handleShow}>
            ADD RECIEPIE
          </button>
    <div className="ms-auto">
   <Link to={'/fav'} >
   <button className="btn btn-warning ms-auto fw-bold">VIEW FAV</button>
   
   </Link>
    </div>
         

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>ADD RECIEPIE</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <input
                  type="text"
                  placeholder="recipe name"
                  className="form-control"
                  value={addReceipie.name}
                  onChange={(e)=>setAddReciepie({...addReceipie,name:e.target.value})}
                />
                <textarea
                  name=""
                  placeholder="ingrediants"
                  className="form-control mt-3"
                  value={addReceipie.ingredient}
                  onChange={(e)=>setAddReciepie({...addReceipie,ingredient:e.target.value})}

                  id=""
                ></textarea>
                 <textarea
                  name=""
                  placeholder="instruction"
                  className="form-control mt-3"
                  id=""
                  value={addReceipie.instruction}
                  onChange={(e)=>setAddReciepie({...addReceipie,instruction:e.target.value})}
                ></textarea>
                <input
                  type="text"
                  placeholder="cooking time"
                  className="form-control mt-3"
                  value={addReceipie.cookTime}
                  onChange={(e)=>setAddReciepie({...addReceipie,cookTime:e.target.value})}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={addREcipie}>
                ADD
              </Button>
            </Modal.Footer>
          </Modal>
        </div>


        <div className="for printing all reciepes mt-5">
            <GetRecipie />
            
        </div>

        {/* <div className="printing and adding all revidw ">
            <Review />
        </div> */}
      </div>
    </>
  );
}

export default MainDash;
