
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import axios, {} from 'axios'
import './App.css';
import Maincontent from './components/Maincontent';
import Contents from './components/Contents';



function App() {
  const [data,setData] = useState([]);


  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    
    .then((res)=>{
      setData(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  return (
    <div >
     <BrowserRouter>
   
     <Routes>
      <Route path='/' element={<Maincontent Data={data}/>}></Route>
      <Route path='/details/:parameter' element={<Contents Data={data}/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
