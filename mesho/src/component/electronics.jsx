import { useState ,useEffect} from "react"
import { Link } from "react-router-dom"
import axios from "axios";


import { useNavigate } from "react-router-dom";
let Electronic=()=>{
    let [electronics,setEle]=useState([])
    let [domi,setdom]=useState([])

let navigate=useNavigate()

useEffect(()=>{
    let fetchData=async()=>{
  let res=await axios.get('https://meshoproject.onrender.com/electronics')
 
  setEle(res.data)
  setdom(res.data)
    }
    fetchData()
  },[])

  //fav
  let addFav=(title)=>{
    electronics.filter((x)=>{
        if(x.title==title){
          

          axios.post('https://meshoproject.onrender.com/fav',{qty:1,type:x.type,image:x.image,title:x.title,price:x.price,rating:x.rating}).then((res)=>{
            alert(res.data.message)
            navigate('/fav')
          })
           }
    })
  }


//posted to cart
  let addcart=(title)=>{
        electronics.filter((x)=>{
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
      setEle(sortedData);
    };

    

    const high=()=>{
      let sortedData=[...domi].sort((a,b)=>b.price - a.price)
      setEle(sortedData)
    }

    const rating=()=>{
      
      let sortData=[...domi].sort((a,b)=>b.rating-a.rating)
      setEle(sortData)
    }
    const under500=()=>{
     
      let res=domi.filter((x)=>x.price<=500)
      setEle(res)
    }
    const great500=()=>{
     
      let res=domi.filter((x)=>{
        if(x.price>=500 && x.price<=1000){
          return x
        }
       })
  setEle(res)
    }


    const great1000=()=>{
     
      let res=domi.filter((x)=>{
        if(x.price>=1000 && x.price<=2000){
          return x
        }
    })
      setEle(res)
    }
    const great2000=()=>{
     
      let res=domi.filter((x)=>x.price>=2000)
      setEle(res)
    }

    //rating
    const above4=()=>{
     
      let res=domi.filter((x)=>x.rating>=4)
      setEle(res)
    }
    const above3=()=>{
     
      let res=domi.filter((x)=>x.rating>=3)
      setEle(res)
    }

    let camara=()=>{
     let res=domi.filter((x)=>x.type=='camara')
     setEle(res)
    }

    let charger=()=>{
      let res=domi.filter((x)=>x.type=='charger')
      setEle(res)
     }
     let powerbank=()=>{
      let res=domi.filter((x)=>x.type=="powerbank")
      setEle(res)
     }
 
     let trimer=()=>{
       let res=domi.filter((x)=>x.type=='trimer')
       setEle(res)
      }

  return(
    <div className="all">
    <div className="carosal">
      <div className="photoB">
      <img style={{margin:"10px"}} src="https://www.jbhifi.co.nz/Global/Promos/2022/09/Carousels/GoPro%20Hero%2011/jb-nz-20220901-GoPro-11-black__MOBILE_HR.jpg" alt="" height={190} width={700} />
      </div>
      <div className="photo">
      <img src="https://www6.slac.stanford.edu/sites/default/files/styles/image_hero/public/2023-05/lsst_microsite_hero_3.jpg?h=5e7b03a8&itok=J5QBkk30" alt=""  height={95} width={340}/>
      <img src="https://media.istockphoto.com/id/1326746475/photo/battery-charging-symbol-icon.webp?b=1&s=170667a&w=0&k=20&c=SdKYw2d11zaYNhB1PHKfs2gVfBLuckXiz7dz7ibVZZg=" alt="" height={95} width={340} />
      </div>
    </div>
    <div className="men">
       <div className="sidebar">
          <h4>Electronics Store</h4>
          <h3>Filter</h3>
           <div className="filter">
           <ul type='square'>
           <li><h6>Category</h6></li>
           <button onClick={camara}>Camara</button>
           <button onClick={charger}>Phone Charger</button>
           <button onClick={powerbank}>Power Bank</button>
           <button onClick={trimer}>Trimmer</button>
           
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
                electronics.map((x)=>{
                    return(
                        <div className="menss">
                         <div className="menImage">
                           <Link to={`/single/${x.id}`}> <img src={x.image} alt="" height={200} width={180} /></Link>
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
 
  )  
}
export default Electronic