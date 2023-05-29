import { Routes, Route, Link } from 'react-router-dom';
import { useContext, useState } from "react"
import { AppContext } from "../../AppContext"
export default function Header1() {
    const {quanlity} = useContext(AppContext)
    
    return(
        <div style={{margin: "20px", fontSize: "20px"}}>
          <Link to={"/"} style={{textDecoration: "none", marginRight:"30px"}}>Trang chủ</Link>
          <Link to={"/cart"} style={{textDecoration: "none"}}>Giỏ hàng ({quanlity})</Link>
        </div>
    )
}