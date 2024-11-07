import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import { deletFAVREcepieAPi, getFavAPI } from '../Service/allApi';
import { Link } from 'react-router-dom';


function Fav() {

    const [getRecipie, setGetRecipie] = useState([]);
   
  
    const getting = async () => {
      const result = await getFavAPI();
      // console.log(result)
      setGetRecipie(result.data);
      
    };
  
    // console.log(getRecipie)
  
    useEffect(() => {
      getting();
      
      // handleDelete()
    }, [getRecipie]);



    const handleDelete = async(id)=>{
        const result = await deletFAVREcepieAPi(id)
        // console.log(result)
    
    }





  return (
   <>
 <div className='text-center'>
   <h2 className='mt-4'>FAVOURITES</h2> 
 </div>
<div className="d-flex align-items-center justify-content-center mt-5">
        <Row>
            {
                getRecipie?.length>0?
                getRecipie?.map((item)=>(
                    <Col>
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
                    <div className="d-flex align-itesm-center justify-content-center mt-3">
                      
                      <Button variant="danger" onClick={()=>handleDelete(item._id)} >DELETE</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

                ))

               
              :
              <div>mothin</div>

            }
          {/* <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="d-flex align-itesm-center justify-content-center">
                  
                  <Button variant="danger">DELETE</Button>
                </div>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </div>


   
   </>
  )
}

export default Fav
