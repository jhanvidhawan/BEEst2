//import model
const Todo = require("../models/todo");

//define route handler.. ye controller kisi route se mapped hai to us route tak ponche hain ..vo route handler hai

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const response = await Todo.create({ title, description });
        res.status(200).json(
            {
                success: true,
                data: response,
                message: "entry created successfully"
            }
        );
    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500)
            .json({
                success: false,
                data: "internal server error",
                message: err.message,
            })
    }
}