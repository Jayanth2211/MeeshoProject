import { useState ,useEffect} from "react"
import { Link } from "react-router-dom"
import axios from "axios";



import { useNavigate } from "react-router-dom";
let Appliances=()=>{
    let [appliances,setEle]=useState([])
    let [domi,setdom]=useState([])

let navigate=useNavigate()

useEffect(()=>{
  let fetchData=async()=>{
let res=await axios.get('http://localhost:4000/appliances')
console.log(res.data);
setEle(res.data)
setdom(res.data)
  }
  fetchData()
},[])

//fav
let addFav=(title)=>{
  appliances.filter((x)=>{
      if(x.title==title){
        

        axios.post('http://localhost:4000/fav',{qty:1,type:x.type,image:x.image,title:x.title,price:x.price,rating:x.rating}).then((res)=>{
          alert(res.data.message)
          navigate('/fav')
        })
         }
  })
}


//posted to cart
let addcart=(title)=>{
      appliances.filter((x)=>{
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

    let washing=()=>{
     let res=domi.filter((x)=>x.type=='washing machin')
     setEle(res)
    }

    let ac=()=>{
      let res=domi.filter((x)=>x.type=='AC')
      setEle(res)
     }
     let oven=()=>{
      let res=domi.filter((x)=>x.type=="Oven")
      setEle(res)
     }
 
     let Fridge=()=>{
       let res=domi.filter((x)=>x.type=='Fridge')
       setEle(res)
      }

  return(
    <div className="all">
      <div className="carosal">
        <div className="photoB">
        <img style={{margin:"10px"}} src="https://img.freepik.com/free-vector/concept-illustration-smart-house-internet-things-wireless-digital-technologies_1441-2204.jpg?size=626&ext=jpg&ga=GA1.1.12140546.1689867406&semt=ais" alt="" height={190} width={900} />
        </div>
        <div className="photo">
        <img src="https://th.bing.com/th?id=OIP.OWWc1_stvafRmR73BHjsXgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt=""  height={220} width={190}/>
        {/* <img src="https://cdn11.bigcommerce.com/s-zq0mxsuq/images/stencil/original/image-manager/website-banner-122x350.png?t=1671923279" alt="" height={95} width={340} /> */}
        </div>
      </div>
    <div className="men">
       <div className="sidebar">
          <h4>Appliances</h4>
          <h3>Filter</h3>
           <div className="filter">
           <ul type='square'>
           <li><h6>Category</h6></li>
           <button onClick={washing}>Washing Machin</button>
           <button onClick={ac}>AC</button>
           <button onClick={oven}>Oven</button>
           <button onClick={Fridge}>Fridge</button>
           
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
                appliances.map((x)=>{
                    return(
                        <div className="menss">
                         <div className="menImage">
                           <Link to={`/AppliancePage/${x.id}`}> <img src={x.image} alt="" height={200} width={180} /></Link>
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
export default Appliances