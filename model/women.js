const mongoose=require('mongoose')



let womenSchema=new mongoose.Schema({
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
       
    }
})

module.exports=mongoose.model('Women',womenSchema)