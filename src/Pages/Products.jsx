import React ,{useState , useEffect}from 'react'

export default function AllProducts() {
  const [state,setState] = useState([]);
   let getData = async () =>{
    try {
      let data =await fetch ('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products')
      data = await data.json();
     
      setState(data.data)
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
   }
   useEffect(() => {
     getData();
   }, [])
   
  return (
    <div>
      <h2>All Products</h2>
      <div className = "products-wrapper">
          { 
            state.map((ele,i)=>{
              return <div key={i} >
                  <h3 className = "name">{ele.title}</h3>
                  <div className= "brand">{ele.brand}</div>
                  <div className = "price">{ele.price}</div>
              </div>
            })
          }
        
        
        
      </div>
    </div>
  )
}