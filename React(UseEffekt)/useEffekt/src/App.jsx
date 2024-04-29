
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'
import Product from './companents/Product';
import { useEffect, useState } from 'react';
import Table from './companents/Table';
import axios from 'axios'


function App() {
const[count,setCount]=useState([])

const getMyData=async()=>{
 await axios.get('https://northwind.vercel.app/api/categories')
  .then((res)=>{
    setCount(res.data)
    
  })
}

useEffect(()=>{
  getMyData()
},[])
  return (
 <>
 <Product products={count} />
 <Table products={count} getMyData={getMyData}/>

 </>
  )
}

export default App
