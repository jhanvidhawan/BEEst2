const express=require("express"); 
const router=express.Router();

//import controller
const{createTodo}=require("../controllers/createTodo");
//change for get:
const{getTodo, getTodoById}=require("../controllers/getTodo");
const {updateTodo}=require("../controllers/updateTodo");
const {deleteTodo}=require("../controllers/deleteTodo");


//define api routes
//create ke liye post chaiye hota
router.post("/createTodo",createTodo);
//change for get:
//to get all
router.get("/getTodos",getTodo);
//to get by id
router.get("/getTodos/:id", getTodoById);
//to update by id
router.put("/updateTodo/:id", updateTodo);
//to delete by id
router.delete("/deleteTodo/:id", deleteTodo);


module.exports=router;