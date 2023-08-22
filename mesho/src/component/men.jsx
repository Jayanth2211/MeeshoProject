import { useEffect,useState } from "react";
import "../style/men.css"
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Men = () => {
    let [men,setMen]=useState([])
    let [domi,setDomi]=useState([])
    let [favr,setFavr]=useState("")
    let nav=useNavigate()
   
    useEffect(()=>{
      let fetchData=async()=>{
    let res=await axios.get('http://localhost:4000/men')
    console.log(res.data);
    setMen(res.data)
    setDomi(res.data)
      }
      fetchData()
    },[])

    //fav
    let addFav=(title)=>{
      men.filter((x)=>{
          if(x.title==title){
            

            axios.post('http://localhost:4000/fav',{qty:1,type:x.type,image:x.image,title:x.title,price:x.price,rating:x.rating}).then((res)=>{
              alert(res.data.message)
              nav('/fav')
            })
             }
      })
    }


//posted to cart
    let addcart=(title)=>{
          men.filter((x)=>{
            if(x.title==title){
               axios.post('http://localhost:4000/cart',{qty:1,type:x.type,image:x.image,title:x.title,price:x.price,rating:x.rating}).then((res)=>{
                alert(res.data.message)
              })
              }
        })
      }
      
    

    //filter function

    //price
    const low = () => {
      const sortedData = [...domi].sort((a, b) => a.price - b.price);
      setMen(sortedData);
    };

    

    const high=()=>{
      let sortedData=[...domi].sort((a,b)=>b.price - a.price)
      setMen(sortedData)
    }

    const rating=()=>{
      
      let sortData=[...domi].sort((a,b)=>b.rating-a.rating)
      setMen(sortData)
    }
    const under500=()=>{
     
      let res=domi.filter((x)=>x.price<=500)
      setMen(res)
    }
    const great500=()=>{
     
      let res=domi.filter((x)=>{
        if(x.price>=500 && x.price<=1000){
          return x
        }
       })
  setMen(res)
    }


    const great1000=()=>{
     
      let res=domi.filter((x)=>{
        if(x.price>=1000 && x.price<=2000){
          return x
        }
    })
      setMen(res)
    }
    const great2000=()=>{
     
      let res=domi.filter((x)=>x.price>=2000)
      setMen(res)
    }

    //rating
    const above4=()=>{
     
      let res=domi.filter((x)=>x.rating>=4)
      setMen(res)
    }
    const above3=()=>{
     
      let res=domi.filter((x)=>x.rating>=3)
      setMen(res)
    }

  

   
   
    return ( 
      <div className="all">
        <div className="carosal">
          <div className="photoB">
          <img style={{margin:"10px"}} src="https://m.media-amazon.com/images/G/31/img21/MA2023/PD23/sbcheader/Hero._SX3000_QL85_FMpng_.png" alt="" height={180} width={900} />
          </div>
          <div className="photo">
        <img src="https://m.media-amazon.com/images/G/31/img23/Luxury-brands/July/ACS_Men_3000x770._CB600167215_.jpg" alt=""  height={90} />
          <img src="https://m.media-amazon.com/images/G/31/img21/MA2023/WRS/P0/Rush/Evergreen_best_picks._CB587786074_.png" alt="" height={90} />
          </div>
        </div>
        <div className="men">
          <div className="sidebar">
          <h4>Men's Store</h4>
          <h3>Filter</h3>
           <div className="filter">
           <ul type='square'>
            <li><h6>Price</h6></li>
            <button onClick={low}>price(Low to High)</button>
          <button onClick={high}>price(High to Low)</button>
          <span onClick={under500}>under &#8377;500</span>
          <span onClick={great500}>&#8377;500-&#8377;1000</span>
          <span onClick={great1000}>&#8377;1000-&#8377;2000</span>
          <span onClick={great2000}>&#8377;2000-&#8377;3000</span>
          <hr/>	
          <li><h6>Customer Rating</h6></li>
          <button onClick={rating}>High Rating</button>
          <span onClick={above4}>4&#9733; & above</span>
          <span onClick={above3}>3&#9733; & above</span>
           </ul>
           
           
          
          
           
           </div>
          </div>
          <div>
              {
                men.map((x)=>{
                    return(
                        <div className="menss">
                          <div className="menImage">  
                          <Link to={`/MenPage/${x.id}`}> <img src={x.image} alt="" height={200} width={180} /></Link>

                           
                          </div>
                          <div className="details">
                          <p className="h1p">{x.title}</p>
                         <span onClick={()=>addFav(x.title)}>&#x2661;</span>
                          <h6 className="h1p">&#8377;{x.price}</h6>
                         <small> <small>Free Delivary</small></small>
                          <span id="rat">{x.rating}&#9734;</span>
                          <button onClick={()=>addcart(x.title)} className="btn btn-outline-secondary " id="addcart" ><ion-icon name="cart-outline"></ion-icon>
Add to Cart</button>
                         
                          </div>
                        </div>
                    )
                })
              }
             
              </div>
        </div>
      </div>
     );
}
 
export default Men;