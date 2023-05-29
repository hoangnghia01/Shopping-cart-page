import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const AppContext = createContext({})
export const AppProvider = ({ children }) => {
    const [show, setShow] = useState(false)
    const [count, setCount] = useState(1)
    const [products, setProducts] = useState([])
    // const [data, setData] = useState(null)
    const getData = async () => {
        const url = `https://6468b3c260c8cb9a2cafc667.mockapi.io/product`
        axios
            .get(url)
            .then((res) => {
                setProducts(res.data)
            })
            .catch((error) => {

            })
    }
    useEffect(() => {
        getData()

    }, [])
    useEffect(()=>{
        if (localStorage.getItem('cart_list')){
            setCart(JSON.parse(localStorage.getItem('cart_list')))
        }
    }, [])

    const [cart, setCart] = useState([])

    const addCart = (id) => {
        const kq = products.find((item) => item.id == id)
        const index = cart.findIndex((item) => item.id == id)
        if (index >= 0) {
            const newlist = cart;
            newlist[index]["qty"]++
            setCart(newlist)
            localStorage.setItem('cart_list', JSON.stringify(newlist))
        }
        else {
            setCart([...cart, { ...kq, qty: "1" }])
            localStorage.setItem('cart_list', JSON.stringify([...cart, { ...kq, qty: "1" }]))
        }
    }

    const delete1 = (id) =>{
        const kq = cart.filter((item) => item.id !== id)
        setCart(kq)
        localStorage.setItem('cart_list', JSON.stringify(kq))
    }

    const changqty = (id, num) => {
        const kq = cart.map((item) => item.id == id && !(num == -1 && item["qty"] ==1) ? {...item, qty: item["qty"]*1 + num}
        // && !(item[]
        : item
        );
        setCart(kq)
        localStorage.setItem('cart_list', JSON.stringify(kq))
     };

    const quanlity = (cart.length)
    return (
        <AppContext.Provider value={{ show, count, setShow, setCount, products, setProducts, addCart, cart, setCart, quanlity, changqty,  delete1 }}>
            {children}
        </AppContext.Provider>
    )
}