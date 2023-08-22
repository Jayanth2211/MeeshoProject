import { useState,useEffect } from "react"
import "../style/cart.css"
import axios from "axios"

const Cart=()=>{
    let [carts,setCart]=useState([])
  let totalCartAmt=0


  useEffect(()=>{
    let fetchData=async()=>{
      let res=await axios.get('https://meshoproject.onrender.com/cart')
      setCart(res.data)
    }
    fetchData()
  },[])
  //increase
  let inc=(initialCart_id)=>{
    let res= carts.map((x)=>
        initialCart_id === x._id ? {...x, qty: x.qty + (x.qty<10 ? 1:0)} : x
    )
    setCart(res)
  }

  //decrese
  let dec=(j)=>{
    let res1=carts.map((x)=>
        j===x._id ? {...x,qty:x.qty-(x.qty>1 ?1:0)}:x
    )
    setCart(res1)
  }
      
      let remove=(id)=>{
        let res=carts.filter((x)=>x._id!=id)
        setCart(res)
      }


      
    return(
        <div className="cart">
     {
        carts.map((x)=>{
            totalCartAmt += x.price*x.qty
            return(
               <div className="catrdetails">
                <div className="image">
                    <img src={x.image} alt="" height={130} width={130} />
                </div>
                <div className="details1">
                  <span>{x.title}</span>
                  <span id="price">&#8377;{x.price}.00</span>
                  <span id="type">for {x.type}</span>
                  <span id="free">Eligible for FREE Shipping</span>
                  <div className="qty">
                    Qty:<span onClick={()=>inc(x._id)}>+</span>{x.qty}<span onClick={()=>dec(x.id)}>-</span>
                  </div>
                  <button onClick={()=>remove(x._id)}>Remove</button>
                </div>
               </div>
            )
        }
        )
     }
     <h4>Total amount:{totalCartAmt}</h4>
        </div>
    )
}
export default Cart