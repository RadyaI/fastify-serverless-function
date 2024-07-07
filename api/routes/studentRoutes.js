import { getStudent, createStudent } from "../controllers/studentController"

export default async function (fastify, opts) {
    fastify.get('/', getStudent)
    fastify.post('/', createStudent)
}