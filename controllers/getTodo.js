//import model
const Todo = require("../models/todo");

//define route handler.. ye controller kisi route se mapped hai to us route tak ponche hain ..vo route handler hai

exports.getTodo = async (req, res) => {
    try {
        //fetch all todo items from database
         const todos=await Todo.find({});
         //response
         res.status(200)
         .json({
            success:true,
            data:todos,
            message:"entire todo data is fetched",
         });
    }
    catch (err) {
        console.error(err);
        console.log(error);
        res.status(500)
        .json({
            success:false,
            error:"internal server error",
            message:err.message,
        })
    }
}

exports.getTodoById=async(req,res)=>{
    try{
        //extract using id
        const id=req.params.id;
        const todo=await Todo.findById({_id:id})

        if (!todo){
            return res.status(404) .json({
                success:false,
                message:"no data found",
            })
        }
        //if found
        res.status(200) .json({
            success:true,
            data:todo,
            message:`todo ${id} data successfully fetched`
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            error:"internal server error",
            message:err.message,
        });
    }
}