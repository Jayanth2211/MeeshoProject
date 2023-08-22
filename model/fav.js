const mongoose=require('mongoose')

const favSchema=new mongoose.Schema({
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

module.exports=mongoose.model('Fav',favSchema)