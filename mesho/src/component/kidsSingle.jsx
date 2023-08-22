import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "../style/singlemen.css"
import freeDelivery from "../image/freeDelivery.svg"
import easy from "../image/easyReturns.svg"
import cod from "../image/cod.svg"
import offer from "../image/offer-9677.svg"
import { useNavigate } from "react-router-dom"
import axios from "axios"
let KidsPage=()=>{
    let params = useParams()
    let [product,setProduct] = useState([])
    let navigate=useNavigate()
    
    
    useEffect(()=>{
      let fetchData=async()=>{
    let res=await axios.get('https://meshoproject.onrender.com/kids')
    
    setProduct(res.data)
      }
      fetchData()
    })

     
//posted to cart
let addcart=(title)=>{
product.filter((x)=>{
  if(x.title==title){
     axios.post('https://meshoproject.onrender.com/cart',{qty:1,type:x.type,image:x.image,title:x.title,price:x.price,rating:x.rating}).then((res)=>{
      alert(res.data.message)
    })
    }
})
}
     
      
    return(
        <div className="singlepage">
          {
            product.map((x)=>{
              if(x.id==params.id){
               return(
        <div className="single">
          <div className="singleImg">
          <img src={x.image} alt="" height={380}  width={380}/> 
          </div>
          <div className="decription">
            <div className="pa">
                    <h1>{x.title}</h1>
                       <span>Rating:{x.rating}&#9734;</span><hr/>
                       <h3>{x.price}&#8377;</h3>
                       <p>Inclusive of all taxes</p><hr/>
                       <img src={offer} alt="" height={25} width={25}/>Offers

                   <div className="offers">
                       <div className="off1">
                          <h6>Bank Offer</h6>
                          <p>Upto ₹750.00 discount on select Credit Cards</p>
                      </div>
                      <div className="off1">
                          <h6>No Cost EMI</h6>
                          <p>Avail No Cost EMI on select cards for orders above ₹3000</p>
                      </div>
                  </div>

                  <div className="sift">
                    <div className="free">
                      <img src={freeDelivery} alt="" height={32} />
                      <div>Free Delivery</div>
                    </div>
                    <div className="free">
                      <img src={cod} alt="" />
                      <div>Pay On Delivery</div>
                    </div>
                   <div className="free">
                      <img src={easy} alt="" />
                      <div>Pay On Delivery</div>
                   </div>
                  </div>
                
           </div>
           <div className="part2">
              <div className="price" style={{display:'flex'}}>
                <span>&#8377;</span>
                <h2>{x.price}</h2>
                <span>00</span>
              </div>
              <p>FREE Delivery <span>Friday, 28 July.</span>Details</p>
              <p style={{color:"red",fontWeight:"bolder"}}>Only 1 left in stock</p>
              <span>Sold by </span>AdityaBirla Fashion & Retail Limited<span> and </span>Fulfilled by Amazon.
              <button id="cart" onClick={()=>addcart(x.title)}>Add to Cart</button>
              <button>Buy Now</button>
              <div className="productdetails">
                <h6 style={{color:"black"}}>Product Details</h6>
                 <span>Name:{x.title}</span>
                <span>Fabric:{x.Fabric}</span>
                <span>Pattern:{x.Pattern}</span>
                <span>Sleeve Length:{x.SleeveLength}</span>
                <span>Net Quantity:{x.NetQuantity}</span>
                <span>Size</span>
                <span>S (Chest Size : 36 in, Length Size: 26 in)</span>
                <span>M (Chest Size : 38 in, Length Size: 27 in)</span>
                <span>L (Chest Size : 40 in, Length Size: 28 in)</span>
                <span>XL (Chest Size : 42 in, Length Size: 29 in)</span>
                <span>Country of Origin : India</span>
              </div>
           </div>
           
        </div>
        </div>
              )
              }
      })
    }
        {
                product.map((x)=>{
                    return(
                        <div className="menss">
                          <div className="menImage">  
                          <Link to={`/KidsPage/${x.id}`}> <img src={x.image} alt="" height={200} width={180} /></Link>

                           
                          </div>
                          <div className="details">
                          <p className="h1p">{x.title}</p>
                         <span >&#x2661;</span>
                          <h6 className="h1p">&#8377;{x.price}</h6>
                         <small> <small>Free Delivary</small></small>
                          <span id="rat">{x.rating}&#9734;</span>
                          <button className="btn btn-outline-secondary " id="addcart" ><ion-icon name="cart-outline"></ion-icon>
Add to Cart</button>
                         
                          </div>
                        </div>
                    )
                })
              }
        </div>
    )
}
export default KidsPage