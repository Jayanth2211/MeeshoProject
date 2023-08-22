let mongoose=require('mongoose')

let CartSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
   title:{
        type:String,
        required:true
    },
    price:{
        type:Number, 
        required:true
    },
   rating:{
        type:Number,
       
    },
    qty:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Cart',CartSchema)