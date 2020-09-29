import Todo from "../models/Todo"

export const getTodos = async (req, res) => {
	const todos = await Todo.findAll()
	res.json(todos)
}

export const addTodo = async (req, res) => {
	const { title } = req.body
	const todo = await Todo.create({ title })
	res.status(200).json(todo)
}

export const changeTodo = async (req, res) => {
	const { id } = req.params
	const { title } = req.body
	const todo = await Todo.findByPk(id)
	todo.title = title
	await todo.save()
	res.status(201).json(todo)
}
