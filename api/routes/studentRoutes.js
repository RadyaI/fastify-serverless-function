import { getStudent, createStudent, updateStudent, deleteStudent, getStudentDetail } from "../controllers/studentController"

export default async function (fastify, opts) {
    fastify.get('/', getStudent)
    fastify.get('/:id', getStudentDetail)
    fastify.post('/', createStudent)
    fastify.put('/:id', updateStudent)
    fastify.delete('/:id', deleteStudent)
}