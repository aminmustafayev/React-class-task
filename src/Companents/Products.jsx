import data from "./data"


const Products = () => {
  return (
  <>
  <ul>
       {data.map((e)=>
  <li key={e.id}>{e.name}</li>
)

 }
  </ul>

  </>
  )
}

export default Products
