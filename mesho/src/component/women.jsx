import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/women.css"
import { Link } from "react-router-dom";
import axios from "axios";

const Women = () => {
    let [women,setW]=useState([])
    let [domi,setDomi]=useState([])
  
    
    let navigate=useNavigate()
    useEffect(()=>{
      let fetchData=async()=>{
    let res=await axios.get('http://localhost:4000/women')
    console.log(res.data);
    setW(res.data)
    setDomi(res.data)
      }
      fetchData()
    },[])

    //fav
    let addFav=(title)=>{
      women.filter((x)=>{
          if(x.title==title){
            

            axios.post('http://localhost:4000/fav',{image:x.image,title:x.title,price:x.price,rating:x.rating}).then((res)=>{
              alert(res.data.message)
              navigate('/fav')
            })
             }
      })
    }


//posted to cart
    let addcart=(title)=>{
          women.filter((x)=>{
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
        setW(sortedData);
      };
  
      
  
      const high=()=>{
        let sortedData=[...domi].sort((a,b)=>b.price - a.price)
        setW(sortedData)
      }
  
      const rating=()=>{
        
        let sortData=[...domi].sort((a,b)=>b.rating-a.rating)
        setW(sortData)
      }
      const under500=()=>{
       
        let res=domi.filter((x)=>x.price<=500)
        setW(res)
      }
      const great500=()=>{
       
        let res=domi.filter((x)=>{
          if(x.price>=500 && x.price<=1000){
            return x
          }
         })
    setW(res)
      }
  
  
      const great1000=()=>{
       
        let res=domi.filter((x)=>{
          if(x.price>=1000 && x.price<=2000){
            return x
          }
      })
        setW(res)
      }
      const great2000=()=>{
       
        let res=domi.filter((x)=>x.price>=2000)
        setW(res)
      }
  
      //rating
      const above4=()=>{
       
        let res=domi.filter((x)=>x.rating>=4)
        setW(res)
      }
      const above3=()=>{
       
        let res=domi.filter((x)=>x.rating>=3)
        setW(res)
      }


    return ( 
      <div className="all">
        <div className="carosal">
          <div className="photoB">
          <img style={{margin:"10px"}} src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/pc/womenhero/safari._SX3000_QL85_.jpg" alt="" height={190} width={900}  />
          </div>
          <div className="photo">
          <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/pc/womenhero/Women-2e._SX3000_QL85_.jpg" alt=""  height={95} width={340}/>
          <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/pc/womenhero/Women-13._SX3000_QL85_.jpg" alt="" height={95} width={340} />
          </div>
        </div>
        <div className="women">
             <div className="sidebar">
          <h4>Women's Store</h4>
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
            women.map((x)=>{
                return(
                    <div className="wom">
                 <div className="womenImage">
                 <Link to={`/WomenPage/${x.id}`}> <img src={x.image} alt="" height={200} width={180} /></Link>
                    
                 </div>

                 <p  className="h1p" >{x.title}</p>
               
                 <span onClick={()=>addFav(x.title)}>&#x2661;</span>
                 
                
                 
                 <h6 className="h1p">&#8377;{x.price} </h6>
                 <small>Free Delivary</small>
                 <h4 id="rat">{x.rating}&#9734;</h4>

                 <button onClick={()=>addcart(x.title )} className="btn btn-outline-secondary " id="addcart" ><ion-icon name="cart-outline"></ion-icon>
Add to Cart</button>

                    </div>
                )
            })
           }
           </div>
           </div>
        </div>
     );
}
 
export default Women;