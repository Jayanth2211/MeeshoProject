import { useState,useEffect } from "react";
import "../style/kids.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
const Kids = () => {
    let [kid1,setKid]=useState([])
    let [domi,setDomi]=useState([])
    let navigate=useNavigate()
    useEffect(()=>{
      let fetchData=async()=>{
    let res=await axios.get('https://meshoproject.onrender.com/kids')
    console.log(res.data);
    setKid(res.data)
    setDomi(res.data)
      }
      fetchData()
    },[])

    //fav
    let addFav=(title)=>{
      kid1.filter((x)=>{
          if(x.title==title){
            

            axios.post('https://meshoproject.onrender.com/fav',{image:x.image,title:x.title,price:x.price,rating:x.rating}).then((res)=>{
              alert(res.data.message)
              navigate('/fav')
            })
             }
      })
    }


//posted to cart
    let addcart=(title)=>{
          kid1.filter((x)=>{
            if(x.title==title){
               axios.post('https://meshoproject.onrender.com/cart',{qty:1,type:x.type,image:x.image,title:x.title,price:x.price,rating:x.rating}).then((res)=>{
                alert(res.data.message)
              })
              }
        })
      }
    

   

        
        
      
    

    //filter function

    //price
    const low = () => {
        const sortedData = [...domi].sort((a, b) => a.price - b.price);
        setKid(sortedData);
      };
  
      
  
      const high=()=>{
        let sortedData=[...domi].sort((a,b)=>b.price - a.price)
        setKid(sortedData)
      }
  
      const rating=()=>{
        
        let sortData=[...domi].sort((a,b)=>b.rating-a.rating)
        setKid(sortData)
      }
      const under500=()=>{
       
        let res=domi.filter((x)=>x.price<=500)
        setKid(res)
      }
      const great500=()=>{
       
        let res=domi.filter((x)=>{
          if(x.price>=500 && x.price<=1000){
            return x
          }
         })
    setKid(res)
      }
  
  
      const great1000=()=>{
       
        let res=domi.filter((x)=>{
          if(x.price>=1000 && x.price<=2000){
            return x
          }
      })
        setKid(res)
      }
      const great2000=()=>{
       
        let res=domi.filter((x)=>x.price>=2000)
        setKid(res)
      }
  
      //rating
      const above4=()=>{
       
        let res=domi.filter((x)=>x.rating>=4)
        setKid(res)
      }
      const above3=()=>{
       
        let res=domi.filter((x)=>x.rating>=3)
        setKid(res)
      }
  
    return ( 

      <div className="all">
      <div className="carosal">
        <div className="photoB">
        <img style={{margin:"10px"}} src="https://cdn11.bigcommerce.com/s-zq0mxsuq/images/stencil/original/carousel/346/Website_banner_Mid_Season_Sale_.jpg?c=2" alt="" height={190} width={900}  />
        </div>
        <div className="photo">
        <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663505300_Carousel-Banners_3.jpg?im=Resize=(1680,320) " alt=""  height={95} width={340}/>
        <img src="https://cdn11.bigcommerce.com/s-zq0mxsuq/images/stencil/original/image-manager/website-banner-122x350.png?t=1671923279" alt="" height={95} width={340} />
        </div>
      </div>
        <div className="kids">
            <div className="sidebar">
          <h4>Kids Store</h4>
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
                kid1.map((x)=>{
                   
                             return(
                                 <div className="kid">
                              <div className="kidImage">
                              <Link to={`/KidsPage/${x.id}`}> <img src={x.image} alt="" height={200} width={180} /></Link>
                                 
                              </div>
                              <div className="details">
                              <p  className="h1p" >{x.title}</p>
                            
                              <span onClick={()=>addFav(x.title)}>&#x2661;</span>
                              
                              
                              
                              <h6 className="h1p">&#8377;{x.price} </h6>
                              <small><small>Free Delivary</small></small>
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
 
export default Kids;