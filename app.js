const express=require('express')
const app=express()

const mongose=require('mongoose')
const path=require('path')
const Users=require('./model/users.js')
const Men=require('./model/men.js')
const Women=require('./model/women.js')
const Kids=require("./model/kids.js")
const Fav=require('./model/fav.js')
const Appliances=require('./model/appliances.js')
const Electronics=require('./model/electronics.js')
const Cart=require('./model/cart.js')

const cors=require('cors')

 

const port=4001

//midle wares

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"./mesho/build")))

const dbURL='mongodb+srv://jayanthgama2001:jayanth%40123@cluster0.piybl5d.mongodb.net/meesho?retryWrites=true&w=majority'


mongose.connect(dbURL).then(()=>{
    console.log("data base connect");
})



//sign in
app.post('/signin',(req,res)=>{
  Users.findOne({phno:req.body.phno}).then((doc)=>{
    if(doc){
      res.send({message:'user is already exist'})
    }
    else{
      let data=new Users({
        username:req.body.username,
        phno:req.body.phno,
        password:req.body.password
      })
      data.save().then(()=>{
        res.send({message:'sign in successfull'})
      }).catch((err)=>{
        res.send({message:'not catching the data'})
      })
    }
  })
})

//for get the appliances data
app.get("/appliances",async(req,res)=>{
     
     try{
        let data=await Appliances.find()
        res.json(data)

     }catch(error){
        console.log(error) 
     }
   

})

//get the women data

app.get('/women',async(req,res)=>{
  try{
    let data=await Women.find()
    res.json(data)
  }catch(error){
    console.log(error);
  }
})


//get the men
app.get('/men',async(req,res)=>{
  try{
    let data=await Men.find()
    res.json(data)
  }catch(error){
    console.log(error);
  }
})

//get the kids
app.get('/kids',async(req,res)=>{
  try{
    let data=await Kids.find()
    res.json(data)
  }catch(error){
    console.log(error);
  }
})

//get the electronics
app.get('/electronics',async(req,res)=>{
  try{
    let data=await Electronics.find()
    res.json(data)
  }catch(error){
    console.log(error);
  }
})

//cart post
app.post('/cart',(req,res)=>{
  Cart.findOne({title:req.body.title}).then((doc)=>{
    if(doc){
      res.send({message:'already added'})
    }
    else{
      let data=new Cart({
        image:req.body.image,
        title:req.body.title, 
        rating:req.body.rating,
        price:req.body.price,
        qty:req.body.qty,
        type:req.body.type
      })
      data.save().then(()=>{
        res.send({message:'added to cart'})
      }).catch((err)=>{
        res.send({message:'unsucessful'})
      })
    }
  })
})



app.get('/cart',async(req,res)=>{
  try{
    let data=await Cart.find()
    res.json(data)
  }catch(error){
    console.log(error);
  }
})




//post data to favraites
app.post('/fav',(req,res)=>{
  Fav.findOne({title:req.body.title}).then((doc)=>{
    if(doc){
      res.send({message:'already added'})
    }
    else{
      let data=new Fav({
        image:req.body.image,
        title:req.body.title, 
        rating:req.body.rating,
        price:req.body.price
        
      })
      data.save().then(()=>{
        res.send({message:'added to favrites'})
      }).catch((error)=>{
        res.send({message:'unsucessful'})
      })
    }
  })
})

//get favraites

app.get('/fav',async(req,res)=>{
  try{
    let data=await Fav.find()
    res.json(data)
  }catch(error){
    console.log(error);
  }
})

//delet data in data base




app.get('*',function (req,res){
  res.sendFile(path.join(__dirname,"./mesho/build/index.html"))
})
app.listen(port,()=>{
    console.log("req port is created");
})





