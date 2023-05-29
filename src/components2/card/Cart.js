import { useContext, useState } from "react"
import { AppContext } from "../../AppContext"
import { Routes, Route, Link } from 'react-router-dom';
import pic from "./pic.jpg"
import { AiFillDelete } from 'react-icons/ai';
import "./Cart.css"
export default function Cart() {
    const { cart, quanlity, changqty, delete1 } = useContext(AppContext)

    
    return (
        <div>
            
               
                   {/* ( <h1 key={index}>{item.productsname}</h1>) */}

            <section  class="vh-100" style = {{ background: "#fff" }}>
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col">
                            <p><span class="h2">Giỏ hàng </span><span class="h4">({quanlity} sản phẩm trong giỏ hàng của bạn)</span></p>
                            
                            <div class="card mb-4">
                                
                                {cart.map((item, index)=>
                                < >
                                <div class="card-body p-4" key={index}>

                                    <div class="row align-items-center">
                                        <div class="col-md-2">
                                            <img src= {pic}
                                                class="img-fluid" alt="Generic placeholder image"></img>
                                        </div>
                                        <div class="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p class="small text-muted mb-4 pb-2">Name</p>
                                                <p class="lead fw-normal mb-0">{item.productsname}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p class="small text-muted mb-4 pb-2">Origin</p>
                                                <p class="lead fw-normal mb-0"><i class="fas fa-circle me-2" style={{color: "#fdd8d2"}}></i>{item.origin}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p class="small text-muted mb-4 pb-2">Quantity</p>
                                                <p class="lead fw-normal mb-0">
                                                    <samp type="button" onClick={()=> (changqty(item.id, -1))}>-</samp>
                                                    {item.qty}
                                                    <span type="button" onClick={()=> (changqty(item.id, 1))}>+</span>
                                                    </p>
                                            </div>
                                        </div>
                                        <div class="col-md-1 d-flex justify-content-center">
                                            <div>
                                                <p class="small text-muted mb-4 pb-2">Price</p>
                                                <p class="lead fw-normal mb-0">${item.price}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p class="small text-muted mb-4 pb-2">Total</p>
                                                <p class="lead fw-normal mb-0">${item.qty*item.price}</p>
                                                
                                            </div>
                                            
                                        </div>
                                        <div class="col-md-1 d-flex justify-content-center" type="button" onClick={()=> (delete1(item.id))}><AiFillDelete/></div>
                                        
                                    </div>

                                </div>
                                </>
                                )}
                            </div>

                            <div class="card mb-5">
                                <div class="card-body p-4">

                                    <div class="float-end">
                                        <p class="mb-0 me-5 d-flex align-items-center">
                                            <span class="small text-muted me-2">Order total:</span> <span
                                                class="lead fw-normal"></span>
                                        </p>
                                    </div>

                                </div>
                            </div>
                             
                            <div class="d-flex justify-content-end">
                                <Link to={"/"} type="button" class="btn btn-light btn-lg me-2">Continue shopping</Link>
                                <button type="button" class="btn btn-primary btn-lg">Add to cart</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
           
        </div>
    )
}