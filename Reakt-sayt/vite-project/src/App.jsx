import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./companents/Form/Form";
import Card from "./companents/Card";
import card from './data'
import React,{ useState } from 'react'



function App() {
  let [data, setdata] = useState(card);
  return (
    <>
      <Form />
      <Card data={data} setdata={setdata}/>
    </>
  );
}

export default App;
