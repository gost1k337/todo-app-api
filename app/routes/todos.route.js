import { Router } from 'express'
import { addTodo, getTodos, changeTodo } from "../controllers/rodos.controller"

const router = Router()

router.get('/', getTodos)

router.post('/', addTodo)

router.put('/:id', changeTodo)

export default router
