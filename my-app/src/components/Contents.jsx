import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { BsArrowLeftCircle } from "react-icons/bs";
function Contents({ Data }) {
const [datas,setname] =useState([]);
const [email,setEmail] =useState('');
const [street,setStreet] =useState('');
const [suite,setSuite] =useState('');
const [city,setCity] =useState('');
const [zipcode,setZipcode] =useState('');
const [Phone,setPhone] =useState('');
const [Website,setWebsite] =useState('');
const [Cmpname,setCmpname] =useState('');
const [CmpPhrase,setCmpPhrase] =useState('');


  const { parameter } = useParams();
  // console.log(Data[parameter - 1]);

  const detail = Data[parameter - 1];

  const nav = useNavigate();

  const redirectHome = () => {
    nav("/");
  };


  const handle = () => {
    localStorage.setItem('Name', datas);
    localStorage.setItem('email', email);
    localStorage.setItem('Street', street);
    localStorage.setItem('suite', suite);
    localStorage.setItem('city',city);
    localStorage.setItem('zipcode', zipcode);
    localStorage.setItem('phone', Phone);
    localStorage.setItem('website',Website);
    localStorage.setItem('cpname',Cmpname);
    localStorage.setItem('cmpphrase',CmpPhrase);
    console.log(datas);
 };
 
  return (
    <div className="detail-div">
      <MDBCard className="detail-div-card">
        <MDBCardBody>
          <Button variant="light" onClick={redirectHome}>
            <BsArrowLeftCircle />
          </Button>
          <br />
          <br />
          <MDBCardText>
            ID :#{detail.id}
          </MDBCardText>
          <MDBCardText>Name : </MDBCardText>
          <MDBCol md="9" className="pe-5">
            <MDBInput label={detail.name} size="lg" id="form2" type="name" onChange={(e) => setname(e.target.value)}/>
          </MDBCol>
          
          <MDBCardText>Email : </MDBCardText>
          <MDBCol md="9" className="pe-5">
            <MDBInput label={detail.email} size="lg" id="form2" type="email" onChange={(e) => setEmail(e.target.value)} />
          </MDBCol>
          <br />

          <MDBCardTitle>Address</MDBCardTitle>
          <br />
          <MDBCardText>
            Street :
            <MDBInput
              label={detail.address.street}
              size="lg"
              id="form2"
              type="street"
              onChange={(e) => setStreet(e.target.value)}
            />
          </MDBCardText>
          <MDBCardText>
            Suite :
            <MDBInput
              label={detail.address.suite}
              size="lg"
              id="form2"
              type="text"
              onChange={(e) => setSuite(e.target.value)}
            />
          </MDBCardText>
          <MDBCardText>
            city :
            <MDBInput
              label={detail.address.city}
              size="lg"
              id="form2"
              type="text"
              onChange={(e) => setCity(e.target.value)}
            />
          </MDBCardText>
          <MDBCardText>
            Zipcode :
            <MDBInput
              label={detail.address.zipcode}
              size="lg"
              id="form2"
              type="text"
              onChange={(e) => setZipcode(e.target.value)}
            />
          </MDBCardText>
          <br />

          <MDBCardText>
            Phone :
            <MDBInput label={detail.phone} size="lg" id="form2" type="text" 
            onChange={(e) => setPhone(e.target.value)}/>
          </MDBCardText>
          <MDBCardText>
            Website :
            <MDBInput label={detail.website} size="lg" id="form2" type="text"
            onChange={(e) => setWebsite(e.target.value)} />
          </MDBCardText>
          <br />

          <MDBCardTitle>Company</MDBCardTitle>
          <br />
          <MDBCardText>
            Name :
            <MDBInput
              label={detail.company.name}
              size="lg"
              id="form2"
              type="text"
              onChange={(e) => setCmpname(e.target.value)}
            />
          </MDBCardText>
          <MDBCardText>
            CatchPhrase:
            <MDBInput
              label={detail.company.catchPhrase}
              size="lg"
              id="form2"
              type="text"
              onChange={(e) => setCmpPhrase(e.target.value)}
            />
          </MDBCardText>
        </MDBCardBody>
        <Button variant="light" onClick={handle
        }>
          Submit
        </Button>
      </MDBCard>

    </div>
  );
}

export default Contents;
