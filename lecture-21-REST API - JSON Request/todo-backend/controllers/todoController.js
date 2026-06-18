const TodoItem = require("../model/todoItem");

exports.createItem = async (req, res, next) => {
  console.log("req.body: ", req.body);
  const { task, date } = req.body;
  const todoItem = new TodoItem({ task, date });
  await todoItem
    .save()
    .then((result) => {
      console.log("result: ", result);
      res
        .status(201)
        .json({ message: "item created successfully", item: result });
    })
    .catch((err) => {
      console.log("error while creating item: ", err);
      res
        .status(500)
        .json({ message: "error while creating item", error: err });
    });
};

exports.getAllItems = async (req, res, next) => {
  const todoItems = await TodoItem.find();
  res.json({ items: todoItems });
};

exports.deleteItem = async (req, res, next) => {
  const { id } = req.params;
  const deletedItem =  await TodoItem.findByIdAndDelete(id);
  res.json({
    message: "Item deleted successfully",
    item: deletedItem,
  });
};

exports.markCompleted = async (req, res, next) => {
  const { id } = req.params;
  const todoItem = await findById(id);
  todoItem.completed = true;
  await todoItem.save();
  res.json(todoItem);
};
