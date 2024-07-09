import { getStudent, createStudent, updateStudent, deleteStudent } from "../controllers/studentController"

export default async function (fastify, opts) {
    fastify.get('/', getStudent)
    fastify.post('/', createStudent)
    fastify.put('/:id', updateStudent)
    fastify.delete('/:id', deleteStudent)
}