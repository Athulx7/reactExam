import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import { addtoFavtoritesAPI, deletREcepieAPi, gettingRecipieAPI } from "../Service/allApi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoFav } from "../redux/fav";

function GetRecipie() {
  const [getRecipie, setGetRecipie] = useState([]);
  const [Fav,setFav] = useState([])

  const getting = async () => {
    const result = await gettingRecipieAPI();
    // console.log(result)
    setGetRecipie(result.data);
    setFav(result.data)
  };

  // console.log(getRecipie)

  useEffect(() => {
    getting();
    
    // handleDelete()
  }, [getRecipie]);

//delting

const handleDelete = async(id)=>{
    const result = await deletREcepieAPi(id)
    console.log(result)

}




const addtoFavourite =async(item)=>{
    // console.log(item)

    const {name,ingredient,instruction,cooktime,id} = item

    const reqBody = new FormData()
    reqBody.append('name',name)
    reqBody.append('ingredient',ingredient)
    reqBody.append('instruction',instruction)
    reqBody.append('cooktime',cooktime)
    reqBody.append('id',id)

    const result = await addtoFavtoritesAPI(reqBody)
    if(result.status === 201){
        alert("item added to favourite")
    }
    else{
        alert("something went wrong")
    }
    // console.log(result)
}




  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <Row>
          {getRecipie?.length > 0 ? (
            getRecipie?.map((item) => (
              <Col className="mt-3">
                <Card style={{ width: "18rem" ,height:'15rem'}}>
                  <Card.Body>
                    <Link to={`/view/${item._id}`}
                      className="text-dark text-center"
                      style={{ textDecoration: "none" }}
                    >
                      <Card.Title>{item.name}</Card.Title>
                    </Link>


                    <Link className="text-dark text-center"
                    to={`/view/${item._id}`}
                      style={{ textDecoration: "none" }}>

                    <Card.Text style={{height:'120px'}}>{item.ingredient.substring(0,150)}...</Card.Text>

                    </Link>
                    <div className="d-flex align-itesm-center justify-content-between">
                      <Button variant="warning" onClick={()=>addtoFavourite(item)}>FAV</Button>
                      <Button variant="danger" onClick={()=>handleDelete(item._id)}>DELETE</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <div>nothing to display</div>
          )}
        </Row>
      </div>
    </>

  );
}

export default GetRecipie;
