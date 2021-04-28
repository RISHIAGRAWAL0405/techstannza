let mongoose=require("mongoose");
const dbUrl=process.env.DB_URL;





// const connectionParams={
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true ,
//     useFindAndModify:false
// }
// mongoose.connect("mongodb+srv://Atishay:WMTU4NnUcnka5rm6@cluster0.upzac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",connectionParams)
//     .then( () => {
//         console.log('Connected to database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     })


let newsSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        required:true
     }
    ,category:{
         type:String,
         required:true
    },
    brand:{
        type:String,
        required:true
    },
    heading:{
        type:String,
        required:true
    },
    mainNews:{
        type:String,
        required:true
    }


});


let News=mongoose.model("News",newsSchema);

module.exports=News;



let seed=async ()=>{
   
    let ne=new News({image:"https://images.anandtech.com/doci/15757/Screenshot_29_678x452.png",date:Date.now(),category:"mobile",brand:"redmi",heading:"redmi going to launch new phone in their mid range",mainNews:"redmi actually recently on their site announced that they are going to launch their new mobile in the mid range segment"})
    await ne.save();
}

seed();