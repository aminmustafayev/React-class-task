import React from 'react'
import axios from "axios"
const Table = ({products,getMyData}) => {
    const handleDelete=async(id)=>{
        let res=await axios.delete(`https://northwind.vercel.app/api/categories/${id}`)
        getMyData()
    }
  return (
    <>
    <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Favorite</th>
      <th scope="col">Delete</th>
      <th scope="col">Uptade</th>
    </tr>
  </thead>
  <tbody>
    {
      products && products.map((el)=>

    <tr>
      <th scope="row">1</th>
      <td>{el.name}</td>
      <td>{el.id}</td>
      <td><button className='btn btn-primary '>Favorite</button></td>
      <td><button onClick={()=>handleDelete(el.id)} className='btn btn-danger '>Delete</button></td>
      <td><button className='btn btn-warning '>Update</button></td>
    </tr>
    )
    }
  </tbody>
</table>


    </>
  )
}

export default Table