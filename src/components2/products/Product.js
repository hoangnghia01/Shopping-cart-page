import "./Product.css"
import { useContext, useState } from "react"
import { AppContext } from "../../AppContext"
import pic from "./pic.jpg"
import swal from 'sweetalert';
export default function (props){
    const { product } = props;
    const{ addCart} = useContext(AppContext)
    return(
        <div className="product">
            <div ><img src= {pic} ></img></div>
            <h1 className="productname">{product.productsname}</h1>
            <h2 className="productprice">$ {product.price}</h2>
            <h3 className="productorigin">{product.origin}</h3>
            <button className="buy" onClick={()=> (addCart(product.id),
                swal({
                    title: "Đạt hàng thành công!",
                    text: "Đã thêm vào giỏ hàng của bạn!",
                    icon: "success",
                    button: "Tiếp tục mua sắm!",
                  })
                )
                }>Buynow</button>
        </div>
        )
}