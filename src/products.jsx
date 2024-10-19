import Product from "./product";

export default function Products (data){
 
    console.log(data)
    return(
        <div>
            <h3>I am from products</h3>
            <Product next={data}  ></Product>
        </div>
    )
}