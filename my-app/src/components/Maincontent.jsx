import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap'
import { GrEdit} from "react-icons/gr";


function Maincontent({Data}) {
    console.log(Data);

    const {parameter}  =useParams()
    const nav =useNavigate()
    

    const redirect =(parameter) =>{
        nav(`/details/${parameter}`)
    }
  return (
    <div className='App'>
       <h1 className="mainhead">User Details</h1>
       <div className="list-card-main">
       {Data.map((res) => {
                    return (
                        <div className='List-Card-Div'>
                            <MDBCard key={res.id} className='List-Card'>
                                <MDBCardBody>
                                    <MDBCardTitle>{res.name}</MDBCardTitle>
                                    <MDBCardText>{res.email}</MDBCardText>
                                    <MDBCardText>{res.phone}</MDBCardText>
                                    <span style={{ float: 'right' }}>
                                        <Button variant='light' onClick={()=>{redirect(res.id)}}><GrEdit />Edit</Button>
                                    </span>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    )
                })}
       </div>
    </div>
  )
}

export default Maincontent