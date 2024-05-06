import { useEffect, useState } from "react";
import { getAll } from "../../../API"
import { endpoint } from "../../../API/base";

const AdminProducts = () => {
  const[data,setData]=useState([])
  async function getProducts() {
    await getAll(endpoint.product).then((res)=>{
      console.log(res.data);
      setData(res.data)
    })
  }
 useEffect(()=>{
  getProducts();
 },[])
  return (
   <>
  <div>
    {data.map((e)=>
    <h1 key={e.id}>{e.name}</h1>
    )}
  </div>
   </>
  )
}

export default AdminProducts