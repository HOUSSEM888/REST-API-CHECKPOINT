const mongoose=require('mongoose')
const Schema =mongoose.Schema;

const userSchema=new Schema({
    Name:string,
    age:Number,
    favoriteFoods: [String],  // Array of strings  
   

})


const User=mongoose.models('users', userSchema)
module.exports=User
 


