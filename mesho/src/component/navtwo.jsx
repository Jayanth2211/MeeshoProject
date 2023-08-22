import virat from "../image/favpng_virat-kohli-tissot-watch-advertising-brand.png"
import anu from "../image/imgbin_anushka-sharma-pk-bollywood-png.png"
import child from "../image/pngimg.com - children_PNG18046.png"
import toy from "../image/home.webp"

import { useRef, useState ,useEffect} from "react"
import { Link } from "react-router-dom"
let Nav=()=>{
return(
    <div className="link" >
    <ul>
        
        
            
        <li><Link to="/women">
          <img src={anu} alt="" height={60} width={60} />
          <div>Women</div></Link></li>
        <li><Link to="/men">
        <img src={virat} alt="" height={60} width={60} />
          <div>Men</div></Link></li>
        <li><Link to="/kid">
        <img src={child} alt="" height={60} width={60} />
          <div>Kids</div></Link></li>
        
          
       
        <li id="toy"><Link to="/appliances"  >
        <img src="https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="" height={60} width={60} />
          <div>Appliances</div></Link></li>

        <li><Link to="/electron">
        <img src="https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="" height={60} width={60} />
          <div>Electronic</div></Link></li>
    </ul>
  </div>  
)
}
export default Nav